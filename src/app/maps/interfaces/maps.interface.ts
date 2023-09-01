import { Marker } from "mapbox-gl";

export interface MenuItem {
  route: string,
  name: string
}

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
