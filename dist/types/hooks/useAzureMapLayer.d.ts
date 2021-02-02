import { IAzureLayerStatefulProviderProps } from '../types'
import atlas from 'azure-maps-control'
export declare const constructLayer: (
  { id, options, type }: Omit<IAzureLayerStatefulProviderProps, 'onCreateCustomLayer'>,
  dataSourceRef: atlas.source.DataSource
) =>
  | atlas.layer.SymbolLayer
  | atlas.layer.HeatMapLayer
  | atlas.layer.ImageLayer
  | atlas.layer.LineLayer
  | atlas.layer.PolygonExtrusionLayer
  | atlas.layer.PolygonLayer
  | atlas.layer.TileLayer
  | atlas.layer.BubbleLayer
  | null
export declare const useAzureMapLayer: ({
  id,
  options,
  type,
  events,
  lifecycleEvents,
  onCreateCustomLayer
}: IAzureLayerStatefulProviderProps) => {
  layerRef: atlas.layer.SymbolLayer | atlas.layer.ImageLayer | atlas.layer.TileLayer | null
}
