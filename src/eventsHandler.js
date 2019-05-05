var constants = require('./constants')
var socketCallback = require('./socketCallback')

/**
 * An event handler for Redux Bolt actions
 *
 * @param {Socket} socket Socket
 * @return {Socket}
 */
const eventsHandler = socket => {
  const { events } = constants
  for (let event in events) {
    socket.on(events[event], socketCallback(socket))
  }
}

module.exports = eventsHandler
