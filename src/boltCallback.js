const constants = require('./constants')

/**
 * A callback to handle Redux Bolt actions
 * 
 * @type function
 */
const boltCallback = (socket, enableLog = false) => {
  const { actions } = constants

  function log(message, data = null) {
    if (enableLog) {
      console.log(`⚡️ >> ${message}`, data)
    }
  }

  // Include a socket in a channel
  socket.on(actions.joinChannel, channel => {
    log(`Socket ${socked.id} joining channel ${channel}`)
    socket.join(channel)
  })

  // Remove a socket from a channel
  socket.on(actions.leaveChannel, channel => {
    log(`Socket ${socket.id} leaving channel ${channel}`)
    socket.leave(channel)
  })
  
  // Broadcast an action to a channel
  socket.on(actions.channel, action => {
    log(`Broadcasting action to channel ${action.channel}`, action)
    socket.broadcast
      .to(action.channel)
      .emit(actions.channel, action)
  })

  // Broadcast a wide action
  socket.on(actions.wide, action => {
    log(`Broadcasting wide action to clients`, action)
    socket.broadcast.emit(actions.wide, action)
  })
}

module.exports = boltCallback
