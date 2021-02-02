import { DataSourceType, IAzureMapFeature, ShapeType, FeatureType } from '../../types'
export declare const useFeature: (
  { setCoords, setProperties }: IAzureMapFeature,
  dataSourceRef: DataSourceType | null,
  shapeRef: ShapeType | null,
  featureRef: FeatureType | null
) => void
