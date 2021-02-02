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
var react_1 = require('@testing-library/react')
var azure_maps_control_1 = require('azure-maps-control')
var react_2 = require('react')
var AzureMapContext_1 = require('../../contexts/AzureMapContext')
var AzureMapPopup_1 = require('./AzureMapPopup')
var mapContextProps = {
  mapRef: null,
  isMapReady: false,
  setMapReady: jest.fn(),
  removeMapRef: jest.fn(),
  setMapRef: jest.fn()
}
var mapRef = new azure_maps_control_1.Map('fake', {})
mapRef.events.add = jest.fn()
var popupRef = new azure_maps_control_1.Popup()
jest.mock('./useCreateAzureMapPopup.ts', function() {
  return {
    useCreatePopup: function() {
      return popupRef
    }
  }
})
var wrapWithAzureMapContext = function(props) {
  return react_2.default.createElement(
    AzureMapContext_1.AzureMapsContext.Provider,
    { value: __assign(__assign({}, mapContextProps), { mapRef: mapRef }) },
    react_2.default.createElement(AzureMapPopup_1.default, __assign({}, __assign({}, props)))
  )
}
describe('AzureMapPopup tests', function() {
  it('should create popup and add events on mount', function() {
    react_1.render(
      wrapWithAzureMapContext({
        events: [
          {
            eventName: 'drag',
            callback: function() {}
          }
        ],
        popupContent: react_2.default.createElement('div', null)
      })
    )
    expect(mapRef.events.add).toHaveBeenCalledWith('drag', popupRef, expect.any(Function))
  })
  it('should remove popup on unmount', function() {
    var unmount = react_1.render(
      wrapWithAzureMapContext({
        popupContent: react_2.default.createElement('div', null)
      })
    ).unmount
    unmount()
    expect(mapRef.popups.remove).toHaveBeenCalled()
  })
  it('should ropen popup when isVisible is true and isOpen returns false', function() {
    popupRef.isOpen = jest.fn(function() {
      return false
    })
    react_1.render(
      wrapWithAzureMapContext({
        popupContent: react_2.default.createElement('div', null),
        isVisible: true
      })
    )
    expect(popupRef.open).toHaveBeenCalledWith(mapRef)
  })
  it('should ropen popup when isVisible is true and isOpen returns false', function() {
    popupRef.isOpen = jest.fn(function() {
      return true
    })
    mapRef.popups.getPopups = jest.fn(function() {
      return [popupRef]
    })
    react_1.render(
      wrapWithAzureMapContext({
        popupContent: react_2.default.createElement('div', null),
        isVisible: false
      })
    )
    expect(popupRef.close).toHaveBeenCalled()
  })
})
//# sourceMappingURL=AzureMapPopup.test.js.map
