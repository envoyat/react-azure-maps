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
var react_1 = require('@testing-library/react')
var azure_maps_control_1 = require('azure-maps-control')
var react_2 = __importDefault(require('react'))
var AzureMapContext_1 = require('../../../contexts/AzureMapContext')
var AzureMapHtmlMarker_1 = __importDefault(require('./AzureMapHtmlMarker'))
var azure_maps_control_2 = __importDefault(require('azure-maps-control'))
var mapContextProps = {
  mapRef: null,
  isMapReady: false,
  setMapReady: jest.fn(),
  removeMapRef: jest.fn(),
  setMapRef: jest.fn()
}
var mapRef = new azure_maps_control_1.Map('fake', {})
var wrapWithAzureMapContext = function(props) {
  return react_2.default.createElement(
    AzureMapContext_1.AzureMapsContext.Provider,
    { value: __assign(__assign({}, mapContextProps), { mapRef: mapRef }) },
    react_2.default.createElement(AzureMapHtmlMarker_1.default, __assign({}, __assign({}, props)))
  )
}
describe('AzureMaphtmlMarker tests', function() {
  it('should create html marker without error and add it to map ref', function() {
    mapRef.markers.add = jest.fn()
    var _a = react_1.render(wrapWithAzureMapContext({})),
      container = _a.container,
      unmount = _a.unmount
    expect(mapRef.markers.add).toHaveBeenCalled()
    expect(container).toMatchSnapshot()
    unmount()
    expect(mapRef.markers.remove).toHaveBeenCalled()
  })
  it('should remove marker from map ref', function() {
    mapRef.markers.remove = jest.fn()
    var unmount = react_1.render(wrapWithAzureMapContext({})).unmount
    unmount()
    expect(mapRef.markers.remove).toHaveBeenCalled()
  })
  it('should add events for marker to map', function() {
    mapRef.events.add = jest.fn()
    react_1.render(
      wrapWithAzureMapContext({
        events: [
          {
            eventName: 'click',
            callback: jest.fn()
          }
        ]
      })
    )
    expect(mapRef.events.add).toHaveBeenCalledWith(
      'click',
      expect.any(Object),
      expect.any(Function)
    )
  })
  describe('options and content change', function() {
    var markerRef = new azure_maps_control_2.default.HtmlMarker()
    // We need somehow to override current mock constructor ts currently do not allow that
    // @ts-ignore
    azure_maps_control_2.default.HtmlMarker = jest.fn(function() {
      return markerRef
    })
    it('should call setOptions on markerRef', function() {
      markerRef.setOptions = jest.fn()
      react_1.render(wrapWithAzureMapContext({ options: { option: 'option' } }))
      expect(markerRef.setOptions).toHaveBeenCalledWith({ option: 'option' })
    })
    it('should call setOptions on markerRef', function() {
      markerRef.setOptions = jest.fn()
      react_1.render(
        wrapWithAzureMapContext({ markerContent: react_2.default.createElement('div', null) })
      )
      expect(markerRef.setOptions).toHaveBeenCalledWith({ htmlContent: '<div></div>' })
    })
    it('should close marker popup', function() {
      react_1.render(
        wrapWithAzureMapContext({
          isPopupVisible: true,
          markerContent: react_2.default.createElement('div', null)
        })
      )
      // Currently we only check if getOptions get called @TODO
      expect(markerRef.getOptions).toHaveBeenCalled()
    })
    it('should open marker popup', function() {
      react_1.render(
        wrapWithAzureMapContext({
          isPopupVisible: false,
          markerContent: react_2.default.createElement('div', null)
        })
      )
      // Currently we only check if getOptions get called @TODO
      expect(markerRef.getOptions).toHaveBeenCalled()
    })
  })
})
//# sourceMappingURL=AzureMapHtmlMarker.test.js.map
