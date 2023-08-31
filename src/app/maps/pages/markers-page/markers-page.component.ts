import { Component, ViewChild, ElementRef } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css'
  ]
})

export class MarkersPageComponent {

  @ViewChild('map') divmap?: ElementRef

  public map?: Map;
  public zoom: number = 13
  public marker?: Marker
  public currentLngLat: LngLat = new LngLat(-4.17900, 40.54113)





  ngAfterViewInit(): void {

    if (!this.divmap) throw "El elemento no fue encontrado"

    this.map = new Map({
      container: this.divmap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat,
      zoom: this.zoom // starting position [lng, lat]
    })

    // Crearla de forma estaticas
    // const markerHtml = document.createElement("div")
    // markerHtml.innerHTML = "Mario"

    // this.marker = new Marker({
    //   element: markerHtml
    // })
    //   .setLngLat(this.currentLngLat)
    //   .addTo(this.map)
  }

}
