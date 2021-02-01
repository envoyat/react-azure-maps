import React from 'react'
import { IAzureLayerStatefulProviderProps } from '../types'
declare const AzureMapLayerContext: React.Context<import('../types').IAzureMapLayerContextState>
declare const AzureMapLayerConsumer: React.Consumer<import('../types').IAzureMapLayerContextState>
declare const AzureMapLayerStatefulProvider: ({
  id,
  options,
  type,
  events,
  lifecycleEvents,
  onCreateCustomLayer
}: IAzureLayerStatefulProviderProps) => JSX.Element
export {
  AzureMapLayerContext,
  AzureMapLayerConsumer,
  AzureMapLayerStatefulProvider as AzureMapLayerProvider
}
