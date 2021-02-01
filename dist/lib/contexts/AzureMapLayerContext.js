'use strict'
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function(o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function() {
            return m[k]
          }
        })
      }
    : function(o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function(o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function(o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.AzureMapLayerProvider = exports.AzureMapLayerConsumer = exports.AzureMapLayerContext = void 0
var react_1 = __importStar(require('react'))
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
