/**
 * Represents the available types of a Bolt Object
 * @const {object}
 */

export const types = {
  send: 'Bolt/Send',
  receive: 'Bolt/Receive'
}

/**
 * Represents the available events of a Bolt Object
 * @const {object}
 */
export const events = {
  connected: 'Bolt/Connected',
  disconnected: 'Bolt/Disconnected',
  reconnected: 'Bolt/Reconnected',
  error: 'Bolt/Error',
  message: 'Bolt/Message',
  joinChannel: 'Bolt/Join_Channel',
  leaveChannel: 'Bolt/Leave_Channel',
  channelMessage: 'Bolt/Channel_Message',
  callAction: 'Bolt/Call_Action',
  broadcast: 'Bolt/Broadcast'
}
