const debug = require('debug')('bolt')
const constants = require('./constants')

/**
 * A callback to handle Redux Bolt actions
 * 
 * @prop socket Socket
 * @type function
 */
const connectionCallback = socket => {
  const { actions, events } = constants
  const findPropName = action => 
    Object.keys(action).find(prop => 
      action[prop].hasOwnProperty('type') ? 
        action[prop].type === events.send
        : false
    )
  // Include a socket in a channel
  socket.on(actions.joinChannel, channel => {
    debug(`️⚡️  Socket %s joined channel "%s"`, socket.id, channel)
    socket.join(channel)
  })

  // Remove a socket from a channel
  socket.on(actions.leaveChannel, channel => {
    debug(`⚡️  Socket %s left channel "%s"`, socket.id, channel)
    socket.leave(channel)
  })
  
  // Broadcast an action to a channel
  socket.on(actions.channel, action => {
    const propName = findPropName(action)
    
    if (typeof propName === 'undefined')
      return

    debug(`⚡️  Broadcasting Bolt action "%s" to channel "%s". Action: %o`, action.type, action[propName].channel, action)
    socket.broadcast
      .to(action[propName].channel)
      .emit(actions.bolt, action)
  })

  // Broadcast a bolt action
  socket.on(actions.bolt, action => {
    debug(`⚡️  Broadcasting Bolt action "%s" to connected sockets. Action: %o`, action.type, action)
    socket.broadcast.emit(actions.bolt, action)
  })
}

module.exports = connectionCallback
