import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Map, Marker, LngLat } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css'
  ]
})

export class MiniMapComponent {

  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef

  public map?: Map;


  ngAfterViewInit() {

    if (!this.divMap?.nativeElement) throw "LngLat cant be null"
    if (!this.lngLat) throw "LngLat cant be null"

    //mapa
    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat,
      zoom: 9, // starting position [lng, lat]
      interactive: false
    })

    //marker
    new Marker()
      .setLngLat(this.lngLat)
      .addTo(this.map)
  }
}
