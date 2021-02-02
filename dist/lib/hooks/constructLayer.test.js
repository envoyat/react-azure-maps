'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var useAzureMapLayer_1 = require('./useAzureMapLayer')
describe('constructLayer', function() {
  var datasourceRef = {}
  it('should return SymbolLayer props if type equal to SymbolLayer', function() {
    var createLayer = useAzureMapLayer_1.constructLayer(
      {
        id: 'SymbolLayerId',
        options: {},
        type: 'SymbolLayer'
      },
      datasourceRef
    )
    expect(createLayer).toEqual({
      layer: 'SymbolLayer',
      options: {},
      id: 'SymbolLayerId',
      datasourceRef: datasourceRef,
      setOptions: expect.any(Function),
      getId: expect.any(Function)
    })
  })
  it('should return HeatLayer props if type equal to HeatLayer', function() {
    var createLayer = useAzureMapLayer_1.constructLayer(
      {
        id: 'HeatLayerId',
        options: {},
        type: 'HeatLayer'
      },
      datasourceRef
    )
    expect(createLayer).toEqual({
      layer: 'HeatLayer',
      options: {},
      id: 'HeatLayerId',
      datasourceRef: datasourceRef
    })
  })
  it('should return ImageLayer props if type equal to ImageLayer', function() {
    var createLayer = useAzureMapLayer_1.constructLayer(
      {
        id: 'imageLayerId',
        options: {},
        type: 'ImageLayer'
      },
      datasourceRef
    )
    expect(createLayer).toEqual({ layer: 'ImageLayer', options: {}, id: 'imageLayerId' })
  })
  it('should return LineLayer props if type equal to LineLayer', function() {
    var createLayer = useAzureMapLayer_1.constructLayer(
      {
        id: 'LineLayerId',
        options: {},
        type: 'LineLayer'
      },
      datasourceRef
    )
    expect(createLayer).toEqual({
      layer: 'LineLayer',
      options: {},
      id: 'LineLayerId',
      datasourceRef: datasourceRef
    })
  })
  it('should return PolygonExtrusionLayer props if type equal to PolygonExtrusionLayer', function() {
    var createLayer = useAzureMapLayer_1.constructLayer(
      {
        id: 'PolygonExtrusionLayerId',
        options: {},
        type: 'PolygonExtrusionLayer'
      },
      datasourceRef
    )
    expect(createLayer).toEqual({
      layer: 'PolygonExtrusionLayer',
      options: {},
      id: 'PolygonExtrusionLayerId',
      datasourceRef: datasourceRef
    })
  })
  it('should return PolygonLayer props if type equal to PolygonLayer', function() {
    var createLayer = useAzureMapLayer_1.constructLayer(
      {
        id: 'PolygonLayerId',
        options: {},
        type: 'PolygonLayer'
      },
      datasourceRef
    )
    expect(createLayer).toEqual({
      layer: 'PolygonLayer',
      options: {},
      id: 'PolygonLayerId',
      datasourceRef: datasourceRef
    })
  })
  it('should return TileLayer props if type equal to TileLayer', function() {
    var createLayer = useAzureMapLayer_1.constructLayer(
      {
        id: 'TileLayerId',
        options: {},
        type: 'TileLayer'
      },
      datasourceRef
    )
    expect(createLayer).toEqual({ layer: 'TileLayer', options: {}, id: 'TileLayerId' })
  })
  it('should return TileLayer props if type equal to TileLayer', function() {
    var createLayer = useAzureMapLayer_1.constructLayer(
      {
        id: 'BubbleLayerId',
        options: {},
        type: 'BubbleLayer'
      },
      datasourceRef
    )
    expect(createLayer).toEqual({
      layer: 'BubbleLayer',
      options: {},
      id: 'BubbleLayerId',
      datasourceRef: datasourceRef
    })
  })
  it('should return null if type is not equal to any type', function() {
    var createLayer = useAzureMapLayer_1.constructLayer(
      {
        id: 'id',
        options: {},
        type: ''
      },
      datasourceRef
    )
    expect(createLayer).toEqual(null)
  })
})
//# sourceMappingURL=constructLayer.test.js.map
