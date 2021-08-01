const jsExports = require('./js-config'); // js config object
const cssExports = require('./css-config'); // css config object

// ex) jsExports.common, cssExports.common ...
module.exports = [jsExports.index, cssExports.index];