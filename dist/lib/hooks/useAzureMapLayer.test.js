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
var react_hooks_1 = require('@testing-library/react-hooks')
var useAzureMapLayer_1 = require('./useAzureMapLayer')
var azure_maps_control_1 = require('azure-maps-control')
var react_1 = require('react')
var AzureMapContext_1 = require('../contexts/AzureMapContext')
var AzureMapDataSourceContext_1 = require('../contexts/AzureMapDataSourceContext')
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
  var datasourceRef = {}
  return react_1.default.createElement(
    AzureMapContext_1.AzureMapsContext.Provider,
    { value: __assign(__assign({}, mapContextProps), { mapRef: mapRef }) },
    react_1.default.createElement(
      AzureMapDataSourceContext_1.AzureMapDataSourceContext.Provider,
      {
        value: {
          dataSourceRef: datasourceRef
        }
      },
      children
    )
  )
}
describe('useAzureMapLayer tests', function() {
  it('should create custom layer on callback', function() {
    var customLayerRef = { getId: jest.fn() }
    var useAzureMapLayerProps = {
      type: 'custom',
      // We need to pas as any because of LayerEvents
      onCreateCustomLayer: jest.fn(function(dref, mref) {
        return customLayerRef
      })
    }
    var result = react_hooks_1.renderHook(
      function() {
        return useAzureMapLayer_1.useAzureMapLayer(useAzureMapLayerProps)
      },
      {
        wrapper: wrapWithAzureMapContext
      }
    ).result
    expect(useAzureMapLayerProps.onCreateCustomLayer).toHaveBeenCalled()
    expect(result.current.layerRef).toEqual(customLayerRef)
  })
  it('should create standard layer and set ref', function() {
    var result = react_hooks_1.renderHook(
      function() {
        return useAzureMapLayer_1.useAzureMapLayer({
          type: 'SymbolLayer',
          id: 'id',
          options: { option1: 'option1' }
        })
      },
      { wrapper: wrapWithAzureMapContext }
    ).result
    expect(result.current.layerRef).toEqual({
      datasourceRef: {
        option1: 'option1'
      },
      getId: expect.any(Function),
      id: 'id',
      layer: 'SymbolLayer',
      options: {},
      setOptions: expect.any(Function)
    })
  })
  it('should handle add events to layerRef', function() {
    mapRef.events.add = jest.fn()
    var events = { click: function() {} }
    react_hooks_1.renderHook(
      function() {
        return useAzureMapLayer_1.useAzureMapLayer({
          type: 'SymbolLayer',
          id: 'id',
          events: events
        })
      },
      { wrapper: wrapWithAzureMapContext }
    )
    expect(mapRef.events.add).toHaveBeenCalledWith('click', expect.any(Object), events.click)
  })
  it('should handle add lifeCycleEvents to layerRef', function() {
    mapRef.events.add = jest.fn()
    var lifecycleEvents = { onCreate: function() {} }
    react_hooks_1.renderHook(
      function() {
        return useAzureMapLayer_1.useAzureMapLayer({
          type: 'SymbolLayer',
          id: 'id',
          lifecycleEvents: lifecycleEvents
        })
      },
      { wrapper: wrapWithAzureMapContext }
    )
    expect(mapRef.events.add).toHaveBeenCalledWith(
      'onCreate',
      expect.any(Object),
      lifecycleEvents.onCreate
    )
  })
  it('shouldRemove layer from map on unmoun', function() {
    mapRef.layers.remove = jest.fn()
    var unmount = react_hooks_1.renderHook(
      function() {
        return useAzureMapLayer_1.useAzureMapLayer({
          type: 'SymbolLayer'
        })
      },
      { wrapper: wrapWithAzureMapContext }
    ).unmount
    unmount()
    expect(mapRef.layers.remove).toHaveBeenCalledWith(expect.any(Object))
  })
  it('should update options on change and call setOptions on layerRef', function() {
    var _a
    var _b = react_hooks_1.renderHook(
        function() {
          return useAzureMapLayer_1.useAzureMapLayer({
            type: 'SymbolLayer',
            options: {
              option: 'option'
            }
          })
        },
        { wrapper: wrapWithAzureMapContext }
      ),
      result = _b.result,
      rerender = _b.rerender
    rerender({
      options: {
        newOption: 'new'
      }
    })
    expect(
      (_a = result.current.layerRef) === null || _a === void 0 ? void 0 : _a.setOptions
    ).toHaveBeenCalledTimes(2)
  })
})
//# sourceMappingURL=useAzureMapLayer.test.js.map
