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
var react_hooks_1 = require('@testing-library/react-hooks')
var azure_maps_control_1 = require('azure-maps-control')
var react_2 = __importDefault(require('react'))
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
var useContextConsumer = function() {
  var dataSourceContext = react_1.useContext(AzureMapDataSourceContext_1.AzureMapDataSourceContext)
  return dataSourceContext
}
var wrapWithDataSourceContext = function(props) {
  return function(_a) {
    var children = _a.children
    return react_2.default.createElement(
      AzureMapContext_1.AzureMapsContext.Provider,
      { value: __assign(__assign({}, mapContextProps), { mapRef: mapRef }) },
      react_2.default.createElement(
        AzureMapDataSourceContext_1.AzureMapDataSourceProvider,
        __assign({}, __assign({}, props)),
        children
      )
    )
  }
}
describe('AzureMapDataSourceProvider tests', function() {
  it('should add data source to the map ref on mount', function() {
    mapRef.sources.add = jest.fn()
    var result = react_hooks_1.renderHook(
      function() {
        return useContextConsumer()
      },
      {
        wrapper: wrapWithDataSourceContext({ id: 'id' })
      }
    ).result
    expect(mapRef.sources.add).toHaveBeenCalledWith(result.current.dataSourceRef)
  })
  it('should add event to data source', function() {
    mapRef.events.add = jest.fn()
    react_hooks_1.renderHook(
      function() {
        return useContextConsumer()
      },
      {
        wrapper: wrapWithDataSourceContext({ id: 'id', events: { render: function() {} } })
      }
    )
    expect(mapRef.events.add).toHaveBeenCalledWith(
      'render',
      expect.any(Object),
      expect.any(Function)
    )
  })
  it('should call importDataFromUrl if dataFromUrl was not falsy', function() {
    var _a
    var result = react_hooks_1.renderHook(
      function() {
        return useContextConsumer()
      },
      {
        wrapper: wrapWithDataSourceContext({ id: 'id', dataFromUrl: 'dataFromUrl' })
      }
    ).result
    expect(
      (_a = result.current.dataSourceRef) === null || _a === void 0 ? void 0 : _a.importDataFromUrl
    ).toHaveBeenCalledWith('dataFromUrl')
  })
  it('should call add collection if collection was not falsy', function() {
    var _a, _b
    var result = react_hooks_1.renderHook(
      function() {
        return useContextConsumer()
      },
      {
        wrapper: wrapWithDataSourceContext({ id: 'id', collection: [] })
      }
    ).result
    expect(
      (_a = result.current.dataSourceRef) === null || _a === void 0 ? void 0 : _a.add
    ).toHaveBeenCalledWith([])
    expect(
      (_b = result.current.dataSourceRef) === null || _b === void 0 ? void 0 : _b.clear
    ).toHaveBeenCalledWith()
  })
  it('should call add collection and clear method if collection was changed', function() {
    var _a, _b
    var _c = react_hooks_1.renderHook(
        function() {
          return useContextConsumer()
        },
        {
          wrapper: wrapWithDataSourceContext({ id: 'id', collection: [] })
        }
      ),
      result = _c.result,
      rerender = _c.rerender
    rerender({})
    expect(
      (_a = result.current.dataSourceRef) === null || _a === void 0 ? void 0 : _a.add
    ).toHaveBeenCalledTimes(2)
    expect(
      (_b = result.current.dataSourceRef) === null || _b === void 0 ? void 0 : _b.clear
    ).toHaveBeenCalledTimes(1)
  })
  it('should call setOptions and clear method if options was changed', function() {
    var _a
    var _b = react_hooks_1.renderHook(
        function() {
          return useContextConsumer()
        },
        {
          wrapper: wrapWithDataSourceContext({ id: 'id', options: { option: 'option' } })
        }
      ),
      result = _b.result,
      rerender = _b.rerender
    expect(
      (_a = result.current.dataSourceRef) === null || _a === void 0 ? void 0 : _a.setOptions
    ).toHaveBeenLastCalledWith({ option: 'option' })
  })
})
//# sourceMappingURL=AzureMapDataSourceContext.test.js.map
