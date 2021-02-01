import atlas from 'azure-maps-control'
import Position = atlas.data.Position
import LineString = atlas.data.LineString
import Pixel = atlas.Pixel
export declare const generateLinesFromArrayOfPosition: (coordinates: Position[]) => LineString
export declare const generatePixelHeading: (origin: Pixel, destination: Pixel) => number
