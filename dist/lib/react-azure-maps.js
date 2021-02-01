'use strict'
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function(o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function() {
            return m[k]
          }
        })
      }
    : function(o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __exportStar =
  (this && this.__exportStar) ||
  function(m, exports) {
    for (var p in m)
      if (p !== 'default' && !exports.hasOwnProperty(p)) __createBinding(exports, m, p)
  }
Object.defineProperty(exports, '__esModule', { value: true })
var AzureMap_1 = require('./components/AzureMap/AzureMap')
Object.defineProperty(exports, 'AzureMap', {
  enumerable: true,
  get: function() {
    return AzureMap_1.default
  }
})
var AzureMapHtmlMarker_1 = require('./components/AzureMapMarkers/AzureMapHtmlMarker/AzureMapHtmlMarker')
Object.defineProperty(exports, 'AzureMapHtmlMarker', {
  enumerable: true,
  get: function() {
    return AzureMapHtmlMarker_1.default
  }
})
var AzureMapFeature_1 = require('./components/AzureMapFeature/AzureMapFeature')
Object.defineProperty(exports, 'AzureMapFeature', {
  enumerable: true,
  get: function() {
    return AzureMapFeature_1.default
  }
})
var AzureMapContext_1 = require('./contexts/AzureMapContext')
Object.defineProperty(exports, 'AzureMapsContext', {
  enumerable: true,
  get: function() {
    return AzureMapContext_1.AzureMapsContext
  }
})
Object.defineProperty(exports, 'AzureMapsConsumer', {
  enumerable: true,
  get: function() {
    return AzureMapContext_1.AzureMapsConsumer
  }
})
Object.defineProperty(exports, 'AzureMapsProvider', {
  enumerable: true,
  get: function() {
    return AzureMapContext_1.AzureMapsProvider
  }
})
Object.defineProperty(exports, 'useAzureMaps', {
  enumerable: true,
  get: function() {
    return AzureMapContext_1.useAzureMaps
  }
})
var AzureMapDataSourceContext_1 = require('./contexts/AzureMapDataSourceContext')
Object.defineProperty(exports, 'AzureMapDataSourceContext', {
  enumerable: true,
  get: function() {
    return AzureMapDataSourceContext_1.AzureMapDataSourceContext
  }
})
Object.defineProperty(exports, 'AzureMapDataSourceConsumer', {
  enumerable: true,
  get: function() {
    return AzureMapDataSourceContext_1.AzureMapDataSourceConsumer
  }
})
Object.defineProperty(exports, 'AzureMapDataSourceProvider', {
  enumerable: true,
  get: function() {
    return AzureMapDataSourceContext_1.AzureMapDataSourceProvider
  }
})
var AzureMapLayerContext_1 = require('./contexts/AzureMapLayerContext')
Object.defineProperty(exports, 'AzureMapLayerContext', {
  enumerable: true,
  get: function() {
    return AzureMapLayerContext_1.AzureMapLayerContext
  }
})
Object.defineProperty(exports, 'AzureMapLayerConsumer', {
  enumerable: true,
  get: function() {
    return AzureMapLayerContext_1.AzureMapLayerConsumer
  }
})
Object.defineProperty(exports, 'AzureMapLayerProvider', {
  enumerable: true,
  get: function() {
    return AzureMapLayerContext_1.AzureMapLayerProvider
  }
})
var AzureMapPopup_1 = require('./components/AzureMapPopup/AzureMapPopup')
Object.defineProperty(exports, 'AzureMapPopup', {
  enumerable: true,
  get: function() {
    return AzureMapPopup_1.default
  }
})
var useCreateAzureMapPopup_1 = require('./components/AzureMapPopup/useCreateAzureMapPopup')
Object.defineProperty(exports, 'useCreatePopup', {
  enumerable: true,
  get: function() {
    return useCreateAzureMapPopup_1.default
  }
})
var mapHelper_1 = require('./components/helpers/mapHelper')
Object.defineProperty(exports, 'generateLinesFromArrayOfPosition', {
  enumerable: true,
  get: function() {
    return mapHelper_1.generateLinesFromArrayOfPosition
  }
})
Object.defineProperty(exports, 'generatePixelHeading', {
  enumerable: true,
  get: function() {
    return mapHelper_1.generatePixelHeading
  }
})
__exportStar(require('./types'), exports)
//# sourceMappingURL=react-azure-maps.js.map
