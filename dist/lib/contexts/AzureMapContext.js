'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useAzureMaps = exports.AzureMapsProvider = exports.AzureMapsConsumer = exports.AzureMapsContext = void 0
var react_1 = require('react')
exports.AzureMapsContext = react_1.createContext({
  mapRef: null,
  isMapReady: false,
  setMapRef: function(mapRef) {},
  removeMapRef: function() {},
  setMapReady: function() {}
})
var Provider = exports.AzureMapsContext.Provider,
  AzureMapsConsumer = exports.AzureMapsContext.Consumer
exports.AzureMapsConsumer = AzureMapsConsumer
var AzureMapsStatefulProvider = function(_a) {
  var children = _a.children
  var _b = react_1.useState(null),
    mapRef = _b[0],
    setMapRef = _b[1]
  var _c = react_1.useState(false),
    isMapReady = _c[0],
    setIsMapReady = _c[1]
  return react_1.default.createElement(
    Provider,
    {
      value: {
        mapRef: mapRef,
        setMapRef: setMapRef,
        isMapReady: isMapReady,
        setMapReady: setIsMapReady,
        removeMapRef: function() {
          return setMapRef(null)
        }
      }
    },
    children
  )
}
exports.AzureMapsProvider = AzureMapsStatefulProvider
var useAzureMaps = function() {
  return react_1.useContext(exports.AzureMapsContext)
}
exports.useAzureMaps = useAzureMaps
//# sourceMappingURL=AzureMapContext.js.map
