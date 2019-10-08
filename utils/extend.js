const _ = require("lodash")

module.exports = (config) => _.mergeWith(require(".."), config, (objValue, srcValue) => {
    if (_.isArray(objValue)) return objValue.concat(srcValue)
})
