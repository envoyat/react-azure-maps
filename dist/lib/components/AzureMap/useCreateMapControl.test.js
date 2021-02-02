'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var react_hooks_1 = require('@testing-library/react-hooks')
var useCreateMapControls_1 = require('./useCreateMapControls')
var azure_maps_control_1 = require('azure-maps-control')
var fakeDefaultControls = [
  {
    controlName: 'CompassControl',
    options: {
      option1: 'option1-value'
    }
  },
  {
    controlName: 'CompassControl',
    options: {
      option1: 'option1-value'
    }
  }
]
var fakeCustomControlls = [
  {
    control: { onAdd: jest.fn(), onRemove: jest.fn() },
    controlOptions: {}
  }
]
describe('Control hooks', function() {
  describe('useCreateMapControls tests', function() {
    it('should create two map controls and call proper method', function() {
      var mockMap = new azure_maps_control_1.Map('#fake-container', {})
      mockMap.controls.add = jest.fn()
      react_hooks_1.renderHook(function() {
        return useCreateMapControls_1.useCreateMapControls(mockMap, fakeDefaultControls)
      })
      expect(mockMap.controls.add).toHaveBeenCalledWith(
        { compassOption: 'option' },
        fakeDefaultControls[0].options
      )
      expect(mockMap.controls.add).toHaveBeenCalledWith(
        { compassOption: 'option' },
        fakeDefaultControls[1].options
      )
    })
  })
  describe('useCreateMapCustomControls tests', function() {
    it('should create custom map controls and call proper method', function() {
      var mockMap = new azure_maps_control_1.Map('#fake-container', {})
      mockMap.controls.add = jest.fn()
      react_hooks_1.renderHook(function() {
        return useCreateMapControls_1.useCreateMapCustomControls(mockMap, fakeCustomControlls)
      })
      expect(mockMap.controls.add).toHaveBeenCalledTimes(1)
      expect(mockMap.controls.add).toHaveBeenCalledWith(
        fakeCustomControlls[0].control,
        fakeCustomControlls[0].controlOptions
      )
    })
  })
  describe('createControl', function() {
    it('should return PitchControl if type equal PitchControl', function() {
      var createdControl = useCreateMapControls_1.createControl('PitchControl', {})
      expect(createdControl).toEqual({ pitchOption: 'option' })
    })
    it('should return ZoomControl if type equal StyleControl', function() {
      var createdControl = useCreateMapControls_1.createControl('ZoomControl', {})
      expect(createdControl).toEqual({ zoomOption: 'option' })
    })
    it('should return StyleControl if type equal StyleControl', function() {
      var createdControl = useCreateMapControls_1.createControl('StyleControl', {})
      expect(createdControl).toEqual({ styleOption: 'option' })
    })
    it('should return CompassControl if type equal CompassControl', function() {
      var createdControl = useCreateMapControls_1.createControl('CompassControl', {})
      expect(createdControl).toEqual({ compassOption: 'option' })
    })
    it('should return undefined if there is no control with type', function() {
      var createdControl = useCreateMapControls_1.createControl('SomeOtherType', {})
      expect(createdControl).toEqual(undefined)
    })
  })
})
//# sourceMappingURL=useCreateMapControl.test.js.map
