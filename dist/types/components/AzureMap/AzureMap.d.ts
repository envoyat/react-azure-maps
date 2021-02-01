import React from 'react'
import { IAzureMap } from '../../types'
import 'azure-maps-control/dist/atlas.min.css'
import 'mapbox-gl/src/css/mapbox-gl.css'
declare const AzureMap: React.MemoExoticComponent<({
  children,
  LoaderComponent,
  providedMapId,
  containerClassName,
  styles,
  options,
  imageSprites,
  controls,
  customControls,
  events,
  cameraOptions,
  trafficOptions,
  userInteraction,
  styleOptions,
  serviceOptions
}: IAzureMap) => JSX.Element>
export default AzureMap
