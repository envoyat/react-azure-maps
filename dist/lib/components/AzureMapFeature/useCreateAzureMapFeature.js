'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useCreateAzureMapFeature = void 0
var azure_maps_control_1 = require('azure-maps-control')
exports.useCreateAzureMapFeature = function(_a) {
  var type = _a.type,
    coordinate = _a.coordinate,
    coordinates = _a.coordinates,
    multipleCoordinates = _a.multipleCoordinates,
    multipleDimensionCoordinates = _a.multipleDimensionCoordinates,
    bbox = _a.bbox
  switch (type) {
    case 'Point':
      return coordinate && new azure_maps_control_1.default.data.Point(coordinate)
    case 'MultiPoint':
      return coordinates && new azure_maps_control_1.default.data.MultiPoint(coordinates, bbox)
    case 'LineString':
      return coordinates && new azure_maps_control_1.default.data.LineString(coordinates, bbox)
    case 'MultiLineString':
      return (
        multipleCoordinates &&
        new azure_maps_control_1.default.data.MultiLineString(multipleCoordinates, bbox)
      )
    case 'Polygon':
      return coordinates && new azure_maps_control_1.default.data.Polygon(coordinates, bbox)
    case 'MultiPolygon':
      return (
        multipleDimensionCoordinates &&
        new azure_maps_control_1.default.data.MultiPolygon(multipleDimensionCoordinates, bbox)
      )
    default:
      console.warn('Check the type and passed props properties')
  }
}
//# sourceMappingURL=useCreateAzureMapFeature.js.map
