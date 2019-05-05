const constants = require('./constants')

/**
 * Find the Bolt Object inside a Redux Action
 *
 * @param {object} action Redux Action
 * @return {object} Redux Action
 */
const getBoltObject = action => {
  return action[
    Object.keys(action).find(prop => {
      if (action[prop].hasOwnProperty('type')) {
        return Object.values(constants.types).includes(action[prop].type)
      }

      return false
    })
  ]
}

module.exports = getBoltObject
