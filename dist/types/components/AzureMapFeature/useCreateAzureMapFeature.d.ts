import { IAzureMapFeature } from '../../types'
import atlas from 'azure-maps-control'
export declare const useCreateAzureMapFeature: ({
  type,
  coordinate,
  coordinates,
  multipleCoordinates,
  multipleDimensionCoordinates,
  bbox
}: IAzureMapFeature) => atlas.data.Geometry | undefined
