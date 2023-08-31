import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl'


@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css'
  ]
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('map') divmap?: ElementRef

  public map?: Map
  public zoom: number = 5.5
  public currentLngLat?: LngLat = new LngLat(-4.17900, 40.54113)

  ngAfterViewInit(): void {

    if (!this.divmap) throw "El elemento no fue encontrado"

    this.map = new Map({
      container: this.divmap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    })
  }
}
