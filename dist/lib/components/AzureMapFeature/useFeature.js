'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useFeature = void 0
var react_1 = require('react')
var useCheckRef_1 = require('../../hooks/useCheckRef')
exports.useFeature = function(_a, dataSourceRef, shapeRef, featureRef) {
  var setCoords = _a.setCoords,
    setProperties = _a.setProperties
  // Simple feature's usecases and methods
  useCheckRef_1.useCheckRef(dataSourceRef, featureRef, function(dref, fref) {
    dref.add(fref)
    return function() {
      dref.remove(fref)
    }
  })
  // Shape's usecases and methods
  useCheckRef_1.useCheckRef(dataSourceRef, shapeRef, function(dref, sref) {
    dref.add(sref)
    return function() {
      dref.remove(sref)
    }
  })
  react_1.useEffect(
    function() {
      if (shapeRef && setCoords) {
        shapeRef.setCoordinates(setCoords)
      }
    },
    [setCoords]
  )
  react_1.useEffect(
    function() {
      if (shapeRef && setProperties) {
        shapeRef.setProperties(setProperties)
      }
    },
    [setProperties]
  )
}
//# sourceMappingURL=useFeature.js.map
