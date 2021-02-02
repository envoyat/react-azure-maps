'use strict'
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.useCreatePopup = void 0
var react_1 = require('react')
var server_1 = require('react-dom/server')
var azure_maps_control_1 = require('azure-maps-control')
var AzureMapContext_1 = require('../../contexts/AzureMapContext')
exports.useCreatePopup = function(_a) {
  var options = _a.options,
    popupContent = _a.popupContent,
    isVisible = _a.isVisible
  var popupRef = react_1.useState(
    new azure_maps_control_1.default.Popup(
      __assign(__assign({}, options), { content: server_1.renderToStaticMarkup(popupContent) })
    )
  )[0]
  var mapRef = react_1.useContext(AzureMapContext_1.AzureMapsContext).mapRef
  react_1.useEffect(
    function() {
      popupRef.setOptions(
        __assign(__assign({}, options), { content: server_1.renderToStaticMarkup(popupContent) })
      )
      if (mapRef && isVisible && !popupRef.isOpen()) {
        popupRef.open(mapRef)
      }
    },
    [options, popupContent]
  )
  return popupRef
}
exports.default = exports.useCreatePopup
//# sourceMappingURL=useCreateAzureMapPopup.js.map
