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
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.AzureMapDataSourceProvider = exports.AzureMapDataSourceConsumer = exports.AzureMapDataSourceContext = void 0
var react_1 = __importStar(require('react'))
var azure_maps_control_1 = __importDefault(require('azure-maps-control'))
var AzureMapContext_1 = require('./AzureMapContext')
var useCheckRef_1 = require('../hooks/useCheckRef')
var source = azure_maps_control_1.default.source
var AzureMapDataSourceContext = react_1.createContext({
  dataSourceRef: null
})
exports.AzureMapDataSourceContext = AzureMapDataSourceContext
var Provider = AzureMapDataSourceContext.Provider,
  AzureMapDataSourceConsumer = AzureMapDataSourceContext.Consumer
exports.AzureMapDataSourceConsumer = AzureMapDataSourceConsumer
/**
 * @param id
 * @param children
 * @param options
 * @param events
 * @param dataFromUrl Async Data from URL
 * @param collection Use for contain Feature Collection !All Feature child will be ignored when collection value will change
 */
var AzureMapDataSourceStatefulProvider = function(_a) {
  var id = _a.id,
    children = _a.children,
    options = _a.options,
    events = _a.events,
    dataFromUrl = _a.dataFromUrl,
    collection = _a.collection
  var dataSourceRef = react_1.useState(new source.DataSource(id, options))[0]
  var mapRef = react_1.useContext(AzureMapContext_1.AzureMapsContext).mapRef
  useCheckRef_1.useCheckRef(mapRef, dataSourceRef, function(mref, dref) {
    for (var eventType in events || {}) {
      mref.events.add(eventType, dref, events[eventType])
    }
    mref.sources.add(dref)
    if (dataFromUrl) {
      dref.importDataFromUrl(dataFromUrl)
    }
    if (collection) {
      dref.add(collection)
    }
  })
  react_1.useEffect(
    function() {
      if (dataSourceRef && collection) {
        // Cleared old values prevent duplication
        dataSourceRef.clear()
        dataSourceRef.add(collection)
      }
    },
    [collection]
  )
  react_1.useEffect(
    function() {
      if (dataSourceRef && options) {
        dataSourceRef.setOptions(options)
      }
    },
    [options]
  )
  return react_1.default.createElement(
    Provider,
    {
      value: {
        dataSourceRef: dataSourceRef
      }
    },
    mapRef && children
  )
}
exports.AzureMapDataSourceProvider = AzureMapDataSourceStatefulProvider
//# sourceMappingURL=AzureMapDataSourceContext.js.map
