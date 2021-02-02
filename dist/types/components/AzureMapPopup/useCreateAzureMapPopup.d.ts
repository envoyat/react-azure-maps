import atlas from 'azure-maps-control'
import { IAzureMapPopup } from '../../types'
export declare const useCreatePopup: ({
  options,
  popupContent,
  isVisible
}: Pick<IAzureMapPopup, 'popupContent' | 'options' | 'isVisible'>) => atlas.Popup
export default useCreatePopup
