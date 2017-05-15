const debug = require('debug')('bolt')
const constants = require('./constants')
const getBoltObject = require('./getBoltObject')

const socketCallback = socket => action => {
  const { types, events } = constants
  const boltObject = getBoltObject(action)
  if (boltObject) {
    switch (boltObject.event) {
      // Join Channel
      case events.joinChannel:
        debug(`️⚡️  Socket %s joined channel "%s"`, socket.id, boltObject.channel)
        socket.join(boltObject.channel)
        break
      // Leave Channel
      case events.leaveChannel:
        debug(`⚡️  Socket %s left channel "%s"`, socket.id, boltObject.channel)
        socket.leave(boltObject.channel)
        break
      // Channel Message
      case events.channelMessage:
        debug(`⚡️  Broadcasting Bolt action "%s" to channel "%s". Action: %o`, action.type, boltObject.channel, action)
        socket.broadcast
          .to(boltObject.channel)
          .emit(events.message, action)
        break
      // Message
      case events.message:
        debug(`⚡️  Broadcasting Bolt action "%s" to connected sockets. Action: %o`, action.type, action)
        socket.broadcast.emit(events.message, action)
        break
    }
  }
}

/**
 * A callback to handle Redux Bolt actions
 * 
 * @prop socket Socket
 * @type function
 */
const boltCallback = socket => {
  const { events } = constants
  for (let event in events) {
    socket.on(events[event], socketCallback(socket))
  }
}

module.exports = boltCallback
