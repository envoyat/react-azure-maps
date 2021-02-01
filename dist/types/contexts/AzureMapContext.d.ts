import React, { ReactElement } from 'react'
import { IAzureMap } from '../types'
export declare const AzureMapsContext: React.Context<import('../types').IAzureMapContextState>
declare const AzureMapsConsumer: React.Consumer<import('../types').IAzureMapContextState>
declare type IAzureMapsStatefulProviderProps = {
  children?: ReactElement<IAzureMap>
}
declare const AzureMapsStatefulProvider: ({
  children
}: IAzureMapsStatefulProviderProps) => JSX.Element
declare const useAzureMaps: () => import('../types').IAzureMapContextState
export { AzureMapsConsumer, AzureMapsStatefulProvider as AzureMapsProvider, useAzureMaps }
