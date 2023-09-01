import { Marker } from "mapbox-gl";

export interface MarkerAndColor {
  color: string,
  marker: Marker
}

export interface PlainMarker {
  color: string,
  lnglat: number[]
}

export interface House {
  title: string;
  description: string;
  lngLat: [number, number];
}
