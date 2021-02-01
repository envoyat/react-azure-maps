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
var react_hooks_1 = require('@testing-library/react-hooks')
var azure_maps_control_1 = require('azure-maps-control')
var react_1 = __importDefault(require('react'))
var AzureMapContext_1 = require('../../contexts/AzureMapContext')
var useCreateAzureMapPopup_1 = require('./useCreateAzureMapPopup')
var mapContextProps = {
  mapRef: null,
  isMapReady: false,
  setMapReady: jest.fn(),
  removeMapRef: jest.fn(),
  setMapRef: jest.fn()
}
var mapRef = new azure_maps_control_1.Map('fake', {})
var wrapWithAzureMapContext = function(_a) {
  var children = _a.children
  return react_1.default.createElement(
    AzureMapContext_1.AzureMapsContext.Provider,
    { value: __assign(__assign({}, mapContextProps), { mapRef: mapRef }) },
    children
  )
}
describe('useCreatePopup tests', function() {
  it('should create popup with options', function() {
    var popupProps = {
      options: {},
      popupContent: react_1.default.createElement('div', null),
      isVisible: false
    }
    var result = react_hooks_1.renderHook(
      function() {
        return useCreateAzureMapPopup_1.useCreatePopup(popupProps)
      },
      {
        wrapper: wrapWithAzureMapContext
      }
    ).result
    expect(result.current.setOptions).toHaveBeenCalled()
    expect(result.current).toEqual({
      setOptions: expect.any(Function),
      isOpen: expect.any(Function),
      open: expect.any(Function),
      close: expect.any(Function)
    })
  })
  it('should create popup with options and open it if isVisible is true', function() {
    var popupProps = {
      options: {},
      popupContent: react_1.default.createElement('div', null),
      isVisible: true
    }
    var result = react_hooks_1.renderHook(
      function() {
        return useCreateAzureMapPopup_1.useCreatePopup(popupProps)
      },
      {
        wrapper: wrapWithAzureMapContext
      }
    ).result
    expect(result.current.open).toHaveBeenCalledWith(mapRef)
  })
})
//# sourceMappingURL=useCreateAzureMapPopup.test.js.map
