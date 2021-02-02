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
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this
        }),
      g
    )
    function verb(n) {
      return function(v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = require('react')
var react_2 = require('@testing-library/react')
var AzureMapContext_1 = require('../../contexts/AzureMapContext')
var AzureMap_1 = require('./AzureMap')
var azure_maps_control_1 = require('azure-maps-control')
var useCreateSprites_1 = require('./useCreateSprites')
var useCreateMapControls_1 = require('./useCreateMapControls')
var LoaderComponent = function() {
  return react_1.default.createElement('div', null, 'Loader')
}
jest.mock('./useCreateMapControls', function() {
  return {
    useCreateMapCustomControls: jest.fn(),
    useCreateMapControls: jest.fn()
  }
})
jest.mock('./useCreateSprites')
jest.mock('guid-typescript', function() {
  return {
    Guid: {
      create: jest.fn(function() {
        return 'fake_generated_id'
      })
    }
  }
})
var mapContextProps = {
  mapRef: null,
  isMapReady: false,
  setMapReady: jest.fn(),
  removeMapRef: jest.fn(),
  setMapRef: jest.fn()
}
var wrapWithAzureMapContext = function(mapContextProps, mapProps) {
  return react_1.default.createElement(
    AzureMapContext_1.AzureMapsContext.Provider,
    { value: __assign({}, mapContextProps) },
    react_1.default.createElement(AzureMap_1.default, __assign({}, mapProps))
  )
}
describe('AzureMap Component', function() {
  beforeEach(function() {
    mapContextProps.removeMapRef.mockClear()
    mapContextProps.setMapReady.mockClear()
    mapContextProps.setMapRef.mockClear()
  })
  it('should setMapRef on mount', function() {
    react_2.act(function() {
      react_2.render(wrapWithAzureMapContext(mapContextProps, {}))
    })
    expect(mapContextProps.setMapRef).toHaveBeenCalled()
  })
  it('should change trafficOptions call setTraffic from mapRef', function() {
    var mapRef = new azure_maps_control_1.Map('fake', {})
    react_2.act(function() {
      var rerender = react_2.render(
        wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {})
      ).rerender
      rerender(
        wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {
          trafficOptions: { some: 'some2' }
        })
      )
    })
    expect(mapRef.setTraffic).toHaveBeenCalledWith({ some: 'some2' })
  })
  it('should change userInteraction call setUserInteraction from mapRef', function() {
    var mapRef = new azure_maps_control_1.Map('fake', {})
    react_2.act(function() {
      var rerender = react_2.render(
        wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {})
      ).rerender
      rerender(
        wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {
          userInteraction: { some: 'some2' }
        })
      )
    })
    expect(mapRef.setUserInteraction).toHaveBeenCalledWith({ some: 'some2' })
  })
  it('should change cameraOptions call setCamera from mapRef', function() {
    var mapRef = new azure_maps_control_1.Map('fake', {})
    react_2.act(function() {
      var rerender = react_2.render(
        wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {})
      ).rerender
      rerender(
        wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {
          cameraOptions: { some: 'some2' }
        })
      )
    })
    expect(mapRef.setCamera).toHaveBeenCalledWith({ some: 'some2' })
  })
  it('should call removeMapRef on unmount of component', function() {
    var mapRef = new azure_maps_control_1.Map('fake', {})
    var unmount = react_2.render(
      wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {})
    ).unmount
    unmount()
    expect(mapContextProps.removeMapRef).toHaveBeenCalled()
  })
  it('should call useCreateImageSprites if imageSprites is not falsy', function() {
    var mapRef = new azure_maps_control_1.Map('fake', {})
    react_2.render(
      wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {
        imageSprites: [{ id: 'some_fake_id' }]
      })
    )
    expect(useCreateSprites_1.useCreateImageSprites).toHaveBeenCalled()
  })
  it('should call useCreateMapControls if controls is not falsy', function() {
    var mapRef = new azure_maps_control_1.Map('fake', {})
    var fakeControls = [{ controlName: 'fake_control_name' }]
    react_2.render(
      wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {
        controls: fakeControls
      })
    )
    expect(useCreateMapControls_1.useCreateMapControls).toHaveBeenCalledWith(
      expect.any(Object),
      fakeControls
    )
  })
  it('should call useCreateMapCustomControls if customControls is not falsy', function() {
    var mapRef = new azure_maps_control_1.Map('fake', {})
    var customControls = [
      {
        control: { onAdd: jest.fn(), onRemove: jest.fn() },
        controlOptions: {}
      }
    ]
    react_2.render(
      wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {
        customControls: customControls
      })
    )
    expect(useCreateMapControls_1.useCreateMapCustomControls).toHaveBeenCalledWith(
      expect.any(Object),
      customControls
    )
  })
  it('should setTraffic on initial props', function() {
    var mapRef = new azure_maps_control_1.Map('fake', {})
    react_2.render(
      wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {
        trafficOptions: { some: 'some2' }
      })
    )
    expect(mapRef.setTraffic).toHaveBeenCalledWith({ some: 'some2' })
  })
  it('should userInteraction on initial props', function() {
    var mapRef = new azure_maps_control_1.Map('fake', {})
    react_2.render(
      wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {
        userInteraction: { some: 'some2' }
      })
    )
    expect(mapRef.setUserInteraction).toHaveBeenCalledWith({ some: 'some2' })
  })
  it('should cameraOptions on initial props', function() {
    var mapRef = new azure_maps_control_1.Map('fake', {})
    react_2.render(
      wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {
        cameraOptions: { some: 'some2' }
      })
    )
    expect(mapRef.setCamera).toHaveBeenCalledWith({ some: 'some2' })
  })
  it('should setStyle on initial props', function() {
    var mapRef = new azure_maps_control_1.Map('fake', {})
    react_2.render(
      wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {
        styleOptions: { some: 'some2' }
      })
    )
    expect(mapRef.setStyle).toHaveBeenCalledWith({ some: 'some2' })
  })
  it('should setServiceOptions on initial props', function() {
    var mapRef = new azure_maps_control_1.Map('fake', {})
    react_2.render(
      wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {
        serviceOptions: { some: 'some2' }
      })
    )
    expect(mapRef.setServiceOptions).toHaveBeenCalledWith({ some: 'some2' })
  })
  it('should call setMapready on mount of component', function() {
    var mapRef = new azure_maps_control_1.Map('fake', {})
    react_2.render(
      wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {})
    )
    expect(mapContextProps.setMapReady).toHaveBeenCalledWith(true)
  })
  it('should add props events to mapRef', function() {
    var mapRef = new azure_maps_control_1.Map('fake', { options: {} })
    var dataCallback = function() {
      console.log('some fake text')
    }
    react_2.render(
      wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {
        events: {
          data: dataCallback
        }
      })
    )
    expect(mapRef.events.add).toHaveBeenCalledWith('ready', expect.any(Function))
    expect(mapRef.events.add).toHaveBeenCalledWith('data', dataCallback)
  })
  it('should render LoaderComponent if isMapReady is false and LoaderComponent exists', function() {
    return __awaiter(void 0, void 0, void 0, function() {
      var mapRef, findByText, loaderElement
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            mapRef = new azure_maps_control_1.Map('fake', { options: {} })
            findByText = react_2.render(
              wrapWithAzureMapContext(__assign(__assign({}, mapContextProps), { mapRef: mapRef }), {
                LoaderComponent: LoaderComponent
              })
            ).findByText
            return [4 /*yield*/, findByText('Loader')]
          case 1:
            loaderElement = _a.sent()
            expect(loaderElement).toMatchSnapshot()
            return [2 /*return*/]
        }
      })
    })
  })
  it('should create map with div and automatically generated id when if isMapReady is true and LoaderComponent exists', function() {
    return __awaiter(void 0, void 0, void 0, function() {
      var mapRef, container
      return __generator(this, function(_a) {
        mapRef = new azure_maps_control_1.Map('fake', { options: {} })
        container = react_2.render(
          wrapWithAzureMapContext(
            __assign(__assign({}, mapContextProps), { mapRef: mapRef, isMapReady: true }),
            {}
          )
        ).container
        expect(container).toMatchSnapshot()
        return [2 /*return*/]
      })
    })
  })
  it('should render map with div and provvided id when if isMapReady is true and LoaderComponent exists', function() {
    return __awaiter(void 0, void 0, void 0, function() {
      var mapRef, container
      return __generator(this, function(_a) {
        mapRef = new azure_maps_control_1.Map('fake', { options: {} })
        container = react_2.render(
          wrapWithAzureMapContext(
            __assign(__assign({}, mapContextProps), { mapRef: mapRef, isMapReady: true }),
            {
              LoaderComponent: LoaderComponent,
              providedMapId: 'some_fake_map_id'
            }
          )
        ).container
        expect(container).toMatchSnapshot()
        return [2 /*return*/]
      })
    })
  })
  afterAll(function() {
    jest.unmock('./useCreateSprites')
    jest.unmock('./useCreateMapControls')
    jest.unmock('guid-typescript')
  })
})
//# sourceMappingURL=AzureMap.test.js.map
