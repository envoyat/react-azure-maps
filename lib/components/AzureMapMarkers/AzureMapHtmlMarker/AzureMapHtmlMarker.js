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
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = require('react')
var server_1 = require('react-dom/server')
var azure_maps_control_1 = __importDefault(require('azure-maps-control'))
var AzureMapContext_1 = require('../../../contexts/AzureMapContext')
var useCheckRef_1 = require('../../../hooks/useCheckRef')
var AzureMapHtmlMarker = react_1.memo(function(_a) {
  var markerContent = _a.markerContent,
    options = _a.options,
    events = _a.events,
    isPopupVisible = _a.isPopupVisible
  var markerRef = react_1.useState(
    new azure_maps_control_1.default.HtmlMarker(
      __assign(__assign({}, options), {
        htmlContent: markerContent && server_1.renderToStaticMarkup(markerContent)
      })
    )
  )[0]
  var mapRef = react_1.useContext(AzureMapContext_1.AzureMapsContext).mapRef
  useCheckRef_1.useCheckRefMount(mapRef, true, function(mref) {
    mref.markers.add(markerRef)
    events &&
      events.forEach(function(_a) {
        var eventName = _a.eventName,
          callback = _a.callback
        mref.events.add(eventName, markerRef, callback)
      })
    return function() {
      mref.markers.remove(markerRef)
    }
  })
  react_1.useEffect(
    function() {
      if (markerRef && mapRef) {
        markerRef.setOptions(
          __assign(__assign({}, options), {
            htmlContent: markerContent && server_1.renderToStaticMarkup(markerContent)
          })
        )
      }
    },
    [markerContent, options]
  )
  react_1.useEffect(
    function() {
      var _a, _b, _c
      if (markerRef && markerRef.getOptions().popup && mapRef) {
        var isMarkerPopupOpen =
          (_a = markerRef.getOptions().popup) === null || _a === void 0 ? void 0 : _a.isOpen()
        if (isMarkerPopupOpen && isPopupVisible) {
          ;(_b = markerRef.getOptions().popup) === null || _b === void 0 ? void 0 : _b.close()
        } else if (isMarkerPopupOpen !== undefined) {
          ;(_c = markerRef.getOptions().popup) === null || _c === void 0 ? void 0 : _c.open()
        } else if ((isPopupVisible && isMarkerPopupOpen) || isPopupVisible) {
          markerRef.togglePopup()
        }
      }
    },
    [isPopupVisible, options, mapRef]
  )
  return null
})
exports.default = AzureMapHtmlMarker
//# sourceMappingURL=AzureMapHtmlMarker.js.map
