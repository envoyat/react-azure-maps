'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useCreateMapCustomControls = exports.createControl = exports.useCreateMapControls = void 0
var azure_maps_control_1 = require('azure-maps-control')
var control = azure_maps_control_1.default.control
exports.useCreateMapControls = function(mapRef, controls) {
  controls.forEach(function(control) {
    var controlName = control.controlName,
      options = control.options,
      controlOptions = control.controlOptions
    mapRef.controls.add(exports.createControl(controlName, controlOptions), options)
  })
}
exports.createControl = function(type, options) {
  switch (type) {
    case 'CompassControl':
      return new control.CompassControl(options)
    case 'PitchControl':
      return new control.PitchControl(options)
    case 'StyleControl':
      return new control.StyleControl(options)
    case 'ZoomControl':
      return new control.ZoomControl(options)
    default:
      console.warn('Check the type and passed props properties or try CustomControl')
  }
}
exports.useCreateMapCustomControls = function(mapRef, customControls) {
  customControls.forEach(function(_a) {
    var control = _a.control,
      controlOptions = _a.controlOptions
    mapRef.controls.add(control, controlOptions)
  })
}
//# sourceMappingURL=useCreateMapControls.js.map
