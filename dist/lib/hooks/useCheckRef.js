'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useCheckRefMount = exports.useCheckRef = void 0
var react_1 = require('react')
function useCheckRef(dep, on, callback) {
  react_1.useEffect(
    function() {
      if (dep && on) {
        return callback(dep, on)
      }
    },
    [on]
  )
}
exports.useCheckRef = useCheckRef
function useCheckRefMount(dep, on, callback) {
  react_1.useEffect(function() {
    if (dep && on) {
      return callback(dep, on)
    }
  }, [])
}
exports.useCheckRefMount = useCheckRefMount
//# sourceMappingURL=useCheckRef.js.map
