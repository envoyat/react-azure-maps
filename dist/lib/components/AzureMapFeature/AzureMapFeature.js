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
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function(o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function(o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = __importStar(require('react'))
var azure_maps_control_1 = __importDefault(require('azure-maps-control'))
var AzureMapDataSourceContext_1 = require('../../contexts/AzureMapDataSourceContext')
var useCreateAzureMapFeature_1 = require('./useCreateAzureMapFeature')
var useFeature_1 = require('./useFeature')
var AzureMapFeature = react_1.memo(function(props) {
  var properties = props.properties,
    id = props.id,
    _a = props.variant,
    variant = _a === void 0 ? 'feature' : _a
  var dataSourceRef = react_1.useContext(AzureMapDataSourceContext_1.AzureMapDataSourceContext)
    .dataSourceRef
  var _b = react_1.default.useState(null),
    featureRef = _b[0],
    setFeatureRef = _b[1]
  var _c = react_1.default.useState(null),
    shapeRef = _c[0],
    setShapeRef = _c[1]
  // Hook for proper handling shapes and features
  useFeature_1.useFeature(props, dataSourceRef, shapeRef, featureRef)
  react_1.useEffect(function() {
    var featureSource = useCreateAzureMapFeature_1.useCreateAzureMapFeature(props)
    if ((!featureRef || !shapeRef) && featureSource) {
      switch (variant) {
        case 'shape':
          setShapeRef(new azure_maps_control_1.default.Shape(featureSource, id, properties))
          break
        case 'feature':
          setFeatureRef(
            new azure_maps_control_1.default.data.Feature(featureSource, properties, id)
          )
          break
      }
    }
  }, [])
  return null
})
exports.default = AzureMapFeature
//# sourceMappingURL=AzureMapFeature.js.map
