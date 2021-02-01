import React from 'react'
import { IAzureDataSourceStatefulProviderProps } from '../types'
declare const AzureMapDataSourceContext: React.Context<import('../types').IAzureMapDataSourceContextState>
declare const AzureMapDataSourceConsumer: React.Consumer<import('../types').IAzureMapDataSourceContextState>
/**
 * @param id
 * @param children
 * @param options
 * @param events
 * @param dataFromUrl Async Data from URL
 * @param collection Use for contain Feature Collection !All Feature child will be ignored when collection value will change
 */
declare const AzureMapDataSourceStatefulProvider: ({
  id,
  children,
  options,
  events,
  dataFromUrl,
  collection
}: IAzureDataSourceStatefulProviderProps) => JSX.Element
export {
  AzureMapDataSourceContext,
  AzureMapDataSourceConsumer,
  AzureMapDataSourceStatefulProvider as AzureMapDataSourceProvider
}
