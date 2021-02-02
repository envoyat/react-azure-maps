'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = require('react')
var azure_maps_control_1 = require('azure-maps-control')
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
