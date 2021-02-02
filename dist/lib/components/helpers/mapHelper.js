'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.generatePixelHeading = exports.generateLinesFromArrayOfPosition = void 0
var azure_maps_control_1 = require('azure-maps-control')
var LineString = azure_maps_control_1.default.data.LineString
var Pixel = azure_maps_control_1.default.Pixel
exports.generateLinesFromArrayOfPosition = function(coordinates) {
  var line = new LineString(coordinates)
  return line
}
exports.generatePixelHeading = function(origin, destination) {
  var heading = Pixel.getHeading(origin, destination)
  return heading
}
//# sourceMappingURL=mapHelper.js.map
