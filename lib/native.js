/*
 * native.js
 */

const path = require('path')

const binding = require(path.join(__dirname, '../build/Release/node_gtk.node'))

module.exports = binding
