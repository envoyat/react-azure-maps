'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = require('react')
var AzureMapContext_1 = require('../../contexts/AzureMapContext')
var useCheckRef_1 = require('../../hooks/useCheckRef')
var useCreateAzureMapPopup_1 = require('./useCreateAzureMapPopup')
var AzureMapPopup = react_1.memo(function(_a) {
  var isVisible = _a.isVisible,
    popupContent = _a.popupContent,
    options = _a.options,
    events = _a.events
  var mapRef = react_1.useContext(AzureMapContext_1.AzureMapsContext).mapRef
  var popupRef = useCreateAzureMapPopup_1.useCreatePopup({
    options: options,
    popupContent: popupContent,
    isVisible: isVisible
  })
  useCheckRef_1.useCheckRefMount(mapRef, true, function(mref) {
    events &&
      events.forEach(function(_a) {
        var eventName = _a.eventName,
          callback = _a.callback
        mref.events.add(eventName, popupRef, callback)
      })
    return function() {
      mref.popups.remove(popupRef)
    }
  })
  react_1.useEffect(
    function() {
      if (mapRef) {
        if (isVisible && !popupRef.isOpen()) {
          popupRef.open(mapRef)
        } else if (mapRef.popups.getPopups().length && !isVisible && popupRef.isOpen()) {
          popupRef.close()
        }
      }
    },
    [isVisible]
  )
  return null
})
exports.default = AzureMapPopup
//# sourceMappingURL=AzureMapPopup.js.map
