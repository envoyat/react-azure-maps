'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var azure_maps_control_1 = require('azure-maps-control')
var useFeature_1 = require('./useFeature')
var react_hooks_1 = require('@testing-library/react-hooks')
var fakePosition = new azure_maps_control_1.data.Point(new azure_maps_control_1.data.Position(0, 0))
var dataSourceRef = new azure_maps_control_1.source.DataSource()
var featureRef = new azure_maps_control_1.data.Feature(fakePosition)
var shapeRef = new azure_maps_control_1.default.Shape(fakePosition)
var fakeShapeProps = {
  setProperties: jest.fn(),
  setCoords: new azure_maps_control_1.default.data.Position(10, 10),
  type: 'Point'
}
var fakeProps = {
  type: 'Point'
}
describe('useFeature tests', function() {
  it('should add feature to dataRef', function() {
    react_hooks_1.renderHook(function() {
      return useFeature_1.useFeature(fakeProps, dataSourceRef, null, featureRef)
    })
    expect(dataSourceRef.add).toHaveBeenCalled()
  })
  it('should add shape to dataRef', function() {
    react_hooks_1.renderHook(function() {
      return useFeature_1.useFeature(fakeProps, dataSourceRef, shapeRef, null)
    })
    expect(dataSourceRef.add).toHaveBeenCalled()
  })
  it('should add shape and setProperties', function() {
    react_hooks_1.renderHook(function() {
      return useFeature_1.useFeature(fakeShapeProps, dataSourceRef, shapeRef, null)
    })
    expect(dataSourceRef.add).toHaveBeenCalled()
    expect(shapeRef.setCoordinates).toHaveBeenCalled()
    expect(shapeRef.setProperties).toHaveBeenCalled()
  })
})
//# sourceMappingURL=useFeature.test.js.map
