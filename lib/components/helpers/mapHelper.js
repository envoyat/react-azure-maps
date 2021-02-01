'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.generatePixelHeading = exports.generateLinesFromArrayOfPosition = void 0
var azure_maps_control_1 = __importDefault(require('azure-maps-control'))
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
