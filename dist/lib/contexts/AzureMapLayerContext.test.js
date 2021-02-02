'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = require('react')
var react_2 = require('@testing-library/react')
var AzureMapLayerContext_1 = require('./AzureMapLayerContext')
describe('AzureMapLayerProvider', function() {
  it('should create and render AzureMapLayerProvider', function() {
    var container = react_2.render(
      react_1.default.createElement(AzureMapLayerContext_1.AzureMapLayerProvider, {
        type: 'SymbolLayer'
      })
    ).container
    expect(container).toMatchSnapshot()
  })
})
//# sourceMappingURL=AzureMapLayerContext.test.js.map
