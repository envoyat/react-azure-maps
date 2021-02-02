'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.AzureMapLayerProvider = exports.AzureMapLayerConsumer = exports.AzureMapLayerContext = void 0
var react_1 = require('react')
var useAzureMapLayer_1 = require('../hooks/useAzureMapLayer')
var AzureMapLayerContext = react_1.createContext({
  layerRef: null
})
exports.AzureMapLayerContext = AzureMapLayerContext
var Provider = AzureMapLayerContext.Provider,
  AzureMapLayerConsumer = AzureMapLayerContext.Consumer
exports.AzureMapLayerConsumer = AzureMapLayerConsumer
var AzureMapLayerStatefulProvider = function(_a) {
  var id = _a.id,
    options = _a.options,
    type = _a.type,
    events = _a.events,
    lifecycleEvents = _a.lifecycleEvents,
    onCreateCustomLayer = _a.onCreateCustomLayer
  var layerRef = useAzureMapLayer_1.useAzureMapLayer({
    id: id,
    options: options,
    type: type,
    events: events,
    lifecycleEvents: lifecycleEvents,
    onCreateCustomLayer: onCreateCustomLayer
  }).layerRef
  return react_1.default.createElement(Provider, {
    value: {
      layerRef: layerRef
    }
  })
}
exports.AzureMapLayerProvider = AzureMapLayerStatefulProvider
//# sourceMappingURL=AzureMapLayerContext.js.map
