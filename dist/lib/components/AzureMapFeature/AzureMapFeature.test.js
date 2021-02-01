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
var azure_maps_control_1 = require('azure-maps-control')
var react_1 = __importDefault(require('react'))
var AzureMapContext_1 = require('../../contexts/AzureMapContext')
var react_azure_maps_1 = require('../../react-azure-maps')
var react_2 = require('@testing-library/react')
var AzureMapFeature_1 = __importDefault(require('./AzureMapFeature'))
var useFeature_1 = require('./useFeature')
var azure_maps_control_2 = __importDefault(require('azure-maps-control'))
jest.mock('./useFeature')
jest.mock('./useCreateAzureMapFeature.ts', function() {
  return {
    useCreateAzureMapFeature: function() {
      return {}
    }
  }
})
var mapRef = new azure_maps_control_1.Map('fake', {})
var dataSourceRef = new azure_maps_control_1.source.DataSource()
var mapContextProps = {
  mapRef: null,
  isMapReady: false,
  setMapReady: jest.fn(),
  removeMapRef: jest.fn(),
  setMapRef: jest.fn()
}
var wrapWithAzureMapContexts = function(featureProps) {
  return react_1.default.createElement(
    AzureMapContext_1.AzureMapsContext.Provider,
    { value: __assign(__assign({}, mapContextProps), { mapRef: mapRef }) },
    react_1.default.createElement(
      react_azure_maps_1.AzureMapDataSourceContext.Provider,
      { value: { dataSourceRef: dataSourceRef } },
      react_1.default.createElement(AzureMapFeature_1.default, __assign({}, featureProps))
    )
  )
}
describe('AzureMapFeature tests', function() {
  it('should create AzureMapFeature', function() {
    var featureProps = { type: 'LineString' }
    react_2.render(wrapWithAzureMapContexts(featureProps))
    expect(useFeature_1.useFeature).toHaveBeenCalled()
  })
  it('should create feature', function() {
    var featureProps = {
      type: 'LineString',
      variant: 'feature',
      id: 'id',
      properties: { prop: 'prop' }
    }
    // @ts-ignore
    azure_maps_control_2.default.data.Feature.mockClear()
    react_2.render(wrapWithAzureMapContexts(featureProps))
    expect(azure_maps_control_2.default.data.Feature).toHaveBeenCalledWith(
      {},
      { prop: 'prop' },
      'id'
    )
  })
  it('should create shape', function() {
    var featureProps = {
      type: 'LineString',
      variant: 'shape',
      id: 'id',
      properties: { prop: 'prop' }
    }
    // @ts-ignore
    azure_maps_control_2.default.Shape.mockClear()
    react_2.render(wrapWithAzureMapContexts(featureProps))
    expect(azure_maps_control_2.default.Shape).toHaveBeenCalledWith({}, 'id', { prop: 'prop' })
  })
})
//# sourceMappingURL=AzureMapFeature.test.js.map
