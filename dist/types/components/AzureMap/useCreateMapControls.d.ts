import { IAzureCustomControls, IAzureMapControls, MapType } from '../../types'
import atlas from 'azure-maps-control'
export declare const useCreateMapControls: (mapRef: MapType, controls: IAzureMapControls[]) => void
export declare const createControl: (
  type: string,
  options?: atlas.ControlOptions | undefined
) => atlas.ControlBase | undefined
export declare const useCreateMapCustomControls: (
  mapRef: MapType,
  customControls: IAzureCustomControls[]
) => void
