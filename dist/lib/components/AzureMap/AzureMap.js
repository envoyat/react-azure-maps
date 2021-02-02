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
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = require('react')
var azure_maps_control_1 = require('azure-maps-control')
var AzureMapContext_1 = require('../../contexts/AzureMapContext')
var guid_typescript_1 = require('guid-typescript')
require('azure-maps-control/dist/atlas.min.css')
require('mapbox-gl/src/css/mapbox-gl.css')
var useCheckRef_1 = require('../../hooks/useCheckRef')
var useCreateSprites_1 = require('./useCreateSprites')
var useCreateMapControls_1 = require('./useCreateMapControls')
var AzureMap = react_1.memo(function(_a) {
  var children = _a.children, // @TODO We need to cover and type all possible childrens that we can pass to this component as child for. ex. Markers etc
    _b = _a.LoaderComponent, // @TODO We need to cover and type all possible childrens that we can pass to this component as child for. ex. Markers etc
    LoaderComponent =
      _b === void 0
        ? function() {
            return react_1.default.createElement('div', null, 'Loading ...')
          }
        : _b,
    providedMapId = _a.providedMapId,
    containerClassName = _a.containerClassName,
    styles = _a.styles,
    _c = _a.options,
    options = _c === void 0 ? {} : _c,
    imageSprites = _a.imageSprites,
    controls = _a.controls,
    customControls = _a.customControls,
    events = _a.events,
    cameraOptions = _a.cameraOptions,
    trafficOptions = _a.trafficOptions,
    userInteraction = _a.userInteraction,
    styleOptions = _a.styleOptions,
    serviceOptions = _a.serviceOptions
  var _d = react_1.useContext(AzureMapContext_1.AzureMapsContext),
    setMapRef = _d.setMapRef,
    removeMapRef = _d.removeMapRef,
    mapRef = _d.mapRef,
    setMapReady = _d.setMapReady,
    isMapReady = _d.isMapReady
  var mapId = react_1.useState(providedMapId || guid_typescript_1.Guid.create().toString())[0]
  react_1.useEffect(
    function() {
      if (mapRef) {
        mapRef.setTraffic(trafficOptions)
      }
    },
    [trafficOptions]
  )
  react_1.useEffect(
    function() {
      if (mapRef) {
        mapRef.setUserInteraction(userInteraction)
      }
    },
    [userInteraction]
  )
  react_1.useEffect(
    function() {
      if (mapRef) {
        mapRef.setCamera(cameraOptions)
      }
    },
    [cameraOptions]
  )
  react_1.useEffect(
    function() {
      if (mapRef) {
        mapRef.setStyle(styleOptions)
      }
    },
    [styleOptions]
  )
  react_1.useEffect(
    function() {
      if (mapRef && serviceOptions) {
        mapRef.setServiceOptions(serviceOptions)
      }
    },
    [serviceOptions]
  )
  useCheckRef_1.useCheckRef(mapRef, mapRef, function(mref) {
    mref.events.add('ready', function() {
      if (imageSprites) {
        useCreateSprites_1.useCreateImageSprites(mref, imageSprites)
      }
      if (controls) {
        useCreateMapControls_1.useCreateMapControls(mref, controls)
      }
      if (customControls) {
        useCreateMapControls_1.useCreateMapCustomControls(mref, customControls)
      }
      if (trafficOptions) {
        mref.setTraffic(trafficOptions)
      }
      if (userInteraction) {
        mref.setUserInteraction(userInteraction)
      }
      if (cameraOptions) {
        mref.setCamera(cameraOptions)
      }
      if (styleOptions) {
        mref.setStyle(styleOptions)
      }
      if (serviceOptions) {
        mref.setServiceOptions(serviceOptions)
      }
      setMapReady(true)
    })
    for (var eventType in events) {
      mref.events.add(eventType, events[eventType])
    }
  })
  react_1.useEffect(function() {
    setMapRef(new azure_maps_control_1.default.Map(mapId, options))
    return function() {
      removeMapRef()
    }
  }, [])
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    !isMapReady && LoaderComponent && react_1.default.createElement(LoaderComponent, null),
    react_1.default.createElement(
      'div',
      {
        className: containerClassName,
        id: mapId,
        style: __assign(__assign({}, styles), { height: '100%' })
      },
      isMapReady && children
    )
  )
})
exports.default = AzureMap
//# sourceMappingURL=AzureMap.js.map
