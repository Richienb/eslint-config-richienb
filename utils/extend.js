const _ = require("lodash")

module.exports = (config) => _.mergeWith(require(".."), config, (objectValue, sourceValue) => {
    if (_.isArray(objectValue)) return objectValue.concat(sourceValue)
})
