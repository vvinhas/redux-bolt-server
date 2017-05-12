/**
 * Constants used by Redux Bolt
 * 
 * @type object
 */
module.exports = {
  actions: {
    connect: 'Bolt/Connect',
    wide: 'Bolt/Wide_Action',
    channel: 'Bolt/Channel_Action',
    joinChannel: 'Bolt/Join_Channel',
    leaveChannel: 'Bolt/Leave_Channel'
  },
  events: {
    send: 'Bolt/Send',
    receive: 'Bolt/Receive'
  }
}
