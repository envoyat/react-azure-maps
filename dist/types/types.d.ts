import { ComponentClass, CSSProperties, ReactElement, StatelessComponent } from 'react'
import atlas, {
  AnimationOptions,
  CameraBoundsOptions,
  CameraOptions,
  DataSourceOptions,
  HeatMapLayerOptions,
  HtmlMarker,
  HtmlMarkerEvents,
  HtmlMarkerOptions,
  ImageLayerOptions,
  LineLayerOptions,
  Map,
  MapDataEvent,
  MapErrorEvent,
  MapEvent,
  MapMouseEvent,
  MapMouseWheelEvent,
  MapTouchEvent,
  Options,
  PolygonExtrusionLayerOptions,
  PolygonLayerOptions,
  PopupEvents,
  PopupOptions,
  ServiceOptions,
  Shape,
  StyleOptions,
  SymbolLayerOptions,
  TargetedEvent,
  TileLayerOptions,
  TrafficOptions,
  UserInteractionOptions,
  Control,
  BubbleLayerOptions,
  LayerOptions
} from 'azure-maps-control'
export declare type IAzureMapOptions = ServiceOptions &
  StyleOptions &
  UserInteractionOptions &
  (CameraOptions | CameraBoundsOptions)
export declare type IAzureMapChildren =
  | ReactElement<IAzureMapHtmlMarker>
  | ReactElement<IAzureMapPopup>
  | ReactElement<IAzureMapDataSourceProps>
export declare type IAzureMap = {
  children?: Array<IAzureMapChildren> | IAzureMapChildren
  providedMapId?: string
  containerClassName?: string
  styles?: CSSProperties
  LoaderComponent?: ComponentClass<any> | StatelessComponent<any>
  options?: IAzureMapOptions
  imageSprites?: IAzureMapImageSprite[]
  controls?: IAzureMapControls[]
  customControls?: IAzureCustomControls[]
  events?: IAzureMapEvent | any
  cameraOptions?: AzureSetCameraOptions
  trafficOptions?: TrafficOptions
  userInteraction?: UserInteractionOptions
  styleOptions?: StyleOptions
  serviceOptions?: ServiceOptions
}
export declare type IAzureCustomControls = {
  control: Control
  controlOptions?: ControlOptions
}
export declare type IAzureMapControls = {
  controlName: string
  controlOptions?: Options
  options?: ControlOptions | undefined
}
export declare type IAzureMapImageSprite = {
  id: string
  templateName?: string
  color?: string
  secondaryColor?: string
  scale?: number
  icon?: string | HTMLImageElement | ImageData
}
export declare type IAzureMapContextState = {
  mapRef: Map | null
  isMapReady: boolean | false
  setMapRef(mapRef: Map): void
  removeMapRef(): void
  setMapReady(isMapReady: boolean): void
}
export declare type IAzureMapHtmlMarkerEvent = {
  eventName: keyof HtmlMarkerEvents
  callback: (e: TargetedEvent) => void
}
export declare type IAzureMapPopupEvent = {
  eventName: keyof PopupEvents
  callback: (e: TargetedEvent) => void
}
export declare type IAzureMapMouseEvents = {
  [T in keyof HtmlMarkerEvents]: (e: TargetedEvent) => void
}
export declare type IAzureMapHtmlMarker = {
  id?: string
  isPopupVisible?: boolean
  markerContent?: ReactElement
  options?: HtmlMarkerOptions
  events?: Array<IAzureMapHtmlMarkerEvent>
}
export declare type IAzureMapPopup = {
  isVisible?: boolean
  options?: PopupOptions
  events?: Array<IAzureMapPopupEvent>
  popupContent: ReactElement
}
export declare type IAzureMapDataSourceContextState = {
  dataSourceRef: atlas.source.DataSource | null
}
export declare type IAzureMapLayerContextState = {
  layerRef: atlas.layer.SymbolLayer | atlas.layer.ImageLayer | atlas.layer.TileLayer | null
}
export declare type IAzureDataSourceChildren =
  | IAzureMapFeature
  | ReactElement<IAzureMapFeature>
  | ReactElement<IAzureLayerStatefulProviderProps>
export declare type IAzureMapDataSourceEvent = {
  [property in IAzureMapDataSourceEventType]: (e: Shape[]) => void
}
export declare type IAzureMapEvent = {
  [property in IAzureMapEventsType]: (
    e:
      | MapDataEvent
      | MapErrorEvent
      | MapTouchEvent
      | MapMouseEvent
      | string
      | MapMouseWheelEvent
      | MapEvent
      | atlas.layer.Layer
      | atlas.source.Source
  ) => void
}
export declare type IAzureDataSourceStatefulProviderProps = {
  id: string
  children?:
    | Array<IAzureDataSourceChildren | IAzureDataSourceChildren[] | null>
    | IAzureDataSourceChildren
    | null
  options?: DataSourceOptions
  events?: IAzureMapDataSourceEvent | any
  dataFromUrl?: string
  collection?:
    | atlas.data.FeatureCollection
    | atlas.data.Feature<atlas.data.Geometry, any>
    | atlas.data.Geometry
    | atlas.data.GeometryCollection
    | Shape
    | Array<atlas.data.Feature<atlas.data.Geometry, any> | atlas.data.Geometry | Shape>
  index?: number
}
export declare type IAzureMapLayerEvent = {
  [property in IAzureMapLayerEventType]: (
    e: MapMouseEvent | MapTouchEvent | MapMouseWheelEvent
  ) => void
}
export declare type IAzureMapLifecycleEvent = {
  [property in IAzureMapLayerLifecycleEvents]: (e: atlas.layer.Layer) => void
}
export declare type IAzureLayerStatefulProviderProps = {
  id?: string
  options?:
    | (SymbolLayerOptions &
        HeatMapLayerOptions &
        ImageLayerOptions &
        LineLayerOptions &
        PolygonExtrusionLayerOptions &
        PolygonLayerOptions &
        TileLayerOptions &
        BubbleLayerOptions &
        LayerOptions)
    | Options
  type: IAzureMapLayerType
  events?: IAzureMapLayerEvent | any
  onCreateCustomLayer?: (dataSourceRef: DataSourceType, mapRef: MapType | null) => atlas.layer.Layer
  lifecycleEvents?: IAzureMapLifecycleEvent | any
}
export declare type IAzureMapLayerLifecycleEvents = 'layeradded' | 'layerremoved'
export declare type IAzureMapEventsType =
  | IAzureMapLayerEventType
  | IAzureMapLayerLifecycleEvents
  | IAzureMapDataSourceEventType
  | IAzureMapAddEventsType
  | IAzureMapSourceEventType
  | 'data'
  | 'sourcedata'
  | 'styledata'
  | 'error'
  | 'styleimagemissing'
export declare type IAzureMapAddEventsType =
  | 'boxzoomstart'
  | 'boxzoomend'
  | 'dragstart'
  | 'drag'
  | 'dragend'
  | 'idle'
  | 'load'
  | 'movestart'
  | 'move'
  | 'moveend'
  | 'pitchstart'
  | 'pitch'
  | 'pitchend'
  | 'ready'
  | 'render'
  | 'resize'
  | 'rotatestart'
  | 'rotate'
  | 'rotateend'
  | 'tokenacquired'
  | 'zoomstart'
  | 'zoom'
  | 'zoomend'
export declare type IAzureMapDataSourceEventType = 'dataadded' | 'dataremoved'
export declare type IAzureMapSourceEventType = 'sourceadded' | 'sourceremoved'
export declare type IAzureMapLayerEventType =
  | 'mousedown'
  | 'mouseup'
  | 'mouseover'
  | 'mousemove'
  | 'click'
  | 'dblclick'
  | 'mouseout'
  | 'mouseenter'
  | 'mouseleave'
  | 'contextmenu'
  | 'wheel'
  | 'touchstart'
  | 'touchend'
  | 'touchmove'
  | 'touchcancel'
export declare type IAzureMapLayerType =
  | 'SymbolLayer'
  | 'HeatLayer'
  | 'ImageLayer'
  | 'LineLayer'
  | 'PolygonExtrusionLayer'
  | 'PolygonLayer'
  | 'TileLayer'
  | 'BubbleLayer'
  | 'HtmlMarkerLayer'
  | 'custom'
export declare type IAzureMapFeatureType =
  | 'Point'
  | 'MultiPoint'
  | 'LineString'
  | 'MultiLineString'
  | 'Polygon'
  | 'MultiPolygon'
export declare type IAzureMapFeature = {
  id?: string
  type: IAzureMapFeatureType
  coordinate?: atlas.data.Position
  coordinates?: Array<atlas.data.Position>
  multipleCoordinates?: Array<Array<atlas.data.Position>>
  multipleDimensionCoordinates?: Array<Array<Array<atlas.data.Position>>>
  bbox?: atlas.data.BoundingBox
  variant?: IAzureMapFeatureVariant
  properties?: Options
  setCoords?:
    | atlas.data.Position
    | atlas.data.Position[]
    | atlas.data.Position[][]
    | atlas.data.Position[][][]
  setProperties?: Options
}
export declare type IAzureMapLayerProps = IAzureMapLayerContextState
export declare type IAzureMapMouseEventRef = HtmlMarker
export declare type IAzureMapsContextProps = IAzureMapContextState
export declare type IAzureMapDataSourceProps = IAzureMapDataSourceContextState
export declare type DataSourceType = atlas.source.DataSource
export declare type LayerType =
  | atlas.layer.SymbolLayer
  | atlas.layer.ImageLayer
  | atlas.layer.TileLayer
export declare type MapType = atlas.Map
export declare type GeometryType = atlas.data.Geometry
export declare type FeatureType = atlas.data.Feature<atlas.data.Geometry, any>
export declare type ShapeType = atlas.Shape
export declare type IAzureMapFeatureVariant = 'shape' | 'feature'
export declare type AzureDataLineString = atlas.data.LineString
export declare type AzureDataPosition = atlas.data.Position
export declare type ControlOptions = atlas.ControlOptions
export declare type AzureSetCameraOptions =
  | ((CameraOptions | CameraBoundsOptions) & AnimationOptions)
  | any
