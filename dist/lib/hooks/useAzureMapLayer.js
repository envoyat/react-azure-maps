'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useAzureMapLayer = exports.constructLayer = void 0
var react_1 = require('react')
var azure_maps_control_1 = require('azure-maps-control')
var AzureMapContext_1 = require('../contexts/AzureMapContext')
var AzureMapDataSourceContext_1 = require('../contexts/AzureMapDataSourceContext')
var useCheckRef_1 = require('./useCheckRef')
var layer = azure_maps_control_1.default.layer
exports.constructLayer = function(_a, dataSourceRef) {
  var id = _a.id,
    _b = _a.options,
    options = _b === void 0 ? {} : _b,
    type = _a.type
  switch (type) {
    case 'SymbolLayer':
      return new layer.SymbolLayer(dataSourceRef, id, options)
    case 'HeatLayer':
      return new layer.HeatMapLayer(dataSourceRef, id, options)
    case 'ImageLayer':
      return new layer.ImageLayer(options, id)
    case 'LineLayer':
      return new layer.LineLayer(dataSourceRef, id, options)
    case 'PolygonExtrusionLayer':
      return new layer.PolygonExtrusionLayer(dataSourceRef, id, options)
    case 'PolygonLayer':
      return new layer.PolygonLayer(dataSourceRef, id, options)
    case 'TileLayer':
      return new layer.TileLayer(options, id)
    case 'BubbleLayer':
      return new layer.BubbleLayer(dataSourceRef, id, options)
    default:
      return null
  }
}
exports.useAzureMapLayer = function(_a) {
  var id = _a.id,
    options = _a.options,
    type = _a.type,
    events = _a.events,
    lifecycleEvents = _a.lifecycleEvents,
    onCreateCustomLayer = _a.onCreateCustomLayer
  var mapRef = react_1.useContext(AzureMapContext_1.AzureMapsContext).mapRef
  var dataSourceRef = react_1.useContext(AzureMapDataSourceContext_1.AzureMapDataSourceContext)
    .dataSourceRef
  var _b = react_1.useState(null),
    layerRef = _b[0],
    setLayerRef = _b[1]
  useCheckRef_1.useCheckRef(!layerRef, dataSourceRef, function() {
    var _a = []
    for (var _i = 0; _i < arguments.length; _i++) {
      _a[_i] = arguments[_i]
    }
    var ref = _a[1]
    var layer = null
    if (type === 'custom') {
      layer = onCreateCustomLayer && onCreateCustomLayer(ref, mapRef)
    } else {
      layer = exports.constructLayer({ id: id, options: options, type: type }, ref)
    }
    setLayerRef(layer)
  })
  useCheckRef_1.useCheckRef(mapRef, layerRef, function(mref, lref) {
    for (var eventType in events) {
      mref.events.add(eventType, lref, events[eventType])
    }
    for (var event_1 in lifecycleEvents) {
      mref.events.add(event_1, lref, lifecycleEvents[event_1])
    }
    mref.layers.add(lref)
    return function() {
      try {
        mref.layers.remove(lref.getId() ? lref.getId() : lref)
      } catch (e) {
        console.error('Error on remove layer', e)
      }
    }
  })
  react_1.useEffect(
    function() {
      if (layerRef && options) {
        layerRef.setOptions(options)
      }
    },
    [options]
  )
  return {
    layerRef: layerRef
  }
}
//# sourceMappingURL=useAzureMapLayer.js.map
