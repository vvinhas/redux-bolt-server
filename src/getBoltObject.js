const constants = require('./constants')

const getBoltObject = action => {
  return action[Object
    .keys(action)
    .find(prop => {
      if (action[prop].hasOwnProperty('type')) {
        return (
          action[prop].type === constants.types.send || 
          action[prop].type === constants.types.receive
        )
      }
      
      return false
    })]
}

module.exports = getBoltObject
