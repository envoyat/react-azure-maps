'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var mapHelper_1 = require('./mapHelper')
var azure_maps_control_1 = __importDefault(require('azure-maps-control'))
azure_maps_control_1.default.Pixel.getHeading = jest.fn(function() {
  return 0
})
describe('generateLinesFromArrayOfPosition', function() {
  it('should call generateLinesFromArrayOfPosition without error', function() {
    var result = mapHelper_1.generateLinesFromArrayOfPosition([
      new azure_maps_control_1.default.data.Position(0, 1)
    ])
    expect(result).toEqual({
      bbox: undefined,
      coords: [[0, 1]],
      type: 'LineString'
    })
  })
})
describe('generatePixelHeading', function() {
  it('should call generatePixelHeading without error', function() {
    var result = mapHelper_1.generatePixelHeading(
      new azure_maps_control_1.default.Pixel(0, 1),
      new azure_maps_control_1.default.Pixel(0, 1)
    )
    expect(result).toEqual(0)
  })
})
//# sourceMappingURL=mapHelper.test.js.map
