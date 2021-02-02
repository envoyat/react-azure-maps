'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var azure_maps_control_1 = require('azure-maps-control')
var useCreateAzureMapFeature_1 = require('./useCreateAzureMapFeature')
var fakeCoordinate = new azure_maps_control_1.default.data.Position(10, 10)
var fakeCoordinates = [
  new azure_maps_control_1.default.data.Position(10, 10),
  new azure_maps_control_1.default.data.Position(20, 20)
]
var fakeMultipleCoordinates = [
  [new azure_maps_control_1.default.data.Position(10, 10)],
  [new azure_maps_control_1.default.data.Position(20, 20)]
]
var fakeMultipleDimensionCoordinates = [
  [
    [new azure_maps_control_1.default.data.Position(10, 10)],
    [new azure_maps_control_1.default.data.Position(20, 20)]
  ]
]
var fakeBbox = new azure_maps_control_1.default.data.BoundingBox(
  new azure_maps_control_1.default.data.Position(10, 10),
  new azure_maps_control_1.default.data.Position(20, 20)
)
describe('AzureMapFeature hooks', function() {
  describe('useCreateAzureMapFeature tests', function() {
    it('should return Point if type equal Point', function() {
      var pointProps = {
        type: 'Point',
        coordinate: fakeCoordinate
      }
      var createPoint = useCreateAzureMapFeature_1.useCreateAzureMapFeature(pointProps)
      expect(createPoint).toEqual({ coords: [10, 10], type: 'Point' })
    })
    it('should return MultiPoint if type equal MultiPoint', function() {
      var multiPointProps = {
        type: 'MultiPoint',
        coordinates: fakeCoordinates,
        bbox: fakeBbox
      }
      var createMultiPoint = useCreateAzureMapFeature_1.useCreateAzureMapFeature(multiPointProps)
      expect(createMultiPoint).toEqual({
        bbox: [
          [10, 10],
          [20, 20]
        ],
        coords: [
          [10, 10],
          [20, 20]
        ],
        type: 'MultiPoint'
      })
    })
    it('should return LineString if type equal LineString', function() {
      var lineStringProps = {
        type: 'LineString',
        coordinates: fakeCoordinates,
        bbox: fakeBbox
      }
      var createLineString = useCreateAzureMapFeature_1.useCreateAzureMapFeature(lineStringProps)
      expect(createLineString).toEqual({
        bbox: [
          [10, 10],
          [20, 20]
        ],
        coords: [
          [10, 10],
          [20, 20]
        ],
        type: 'LineString'
      })
    })
    it('should return MultiLineString if type equal MultiLineString', function() {
      var multiLineStringProps = {
        type: 'MultiLineString',
        multipleCoordinates: fakeMultipleCoordinates,
        bbox: fakeBbox
      }
      var createMultiLineStringProps = useCreateAzureMapFeature_1.useCreateAzureMapFeature(
        multiLineStringProps
      )
      expect(createMultiLineStringProps).toEqual({
        bbox: [
          [10, 10],
          [20, 20]
        ],
        multipleCoordinates: [[[10, 10]], [[20, 20]]],
        type: 'MultiLineString'
      })
    })
    it('should return Polygon if type equal Polygon', function() {
      var lineStringProps = {
        type: 'Polygon',
        coordinates: fakeCoordinates,
        bbox: fakeBbox
      }
      var createLineString = useCreateAzureMapFeature_1.useCreateAzureMapFeature(lineStringProps)
      expect(createLineString).toEqual({
        bbox: [
          [10, 10],
          [20, 20]
        ],
        coords: [
          [10, 10],
          [20, 20]
        ],
        type: 'Polygon'
      })
    })
    it('should return MultiPolygon if type equal MultiPolygon', function() {
      var multiPolygonProps = {
        type: 'MultiPolygon',
        multipleDimensionCoordinates: fakeMultipleDimensionCoordinates,
        bbox: fakeBbox
      }
      var createMultiPolygon = useCreateAzureMapFeature_1.useCreateAzureMapFeature(
        multiPolygonProps
      )
      expect(createMultiPolygon).toEqual({
        bbox: [
          [10, 10],
          [20, 20]
        ],
        type: 'MultiPolygon',
        multipleDimensionCoordinates: [[[[10, 10]], [[20, 20]]]]
      })
    })
  })
})
//# sourceMappingURL=useCreateAzureMapFeature.test.js.map
