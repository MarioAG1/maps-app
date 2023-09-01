import { Component, ViewChild, ElementRef } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';
import { MarkerAndColor, PlainMarker } from '../../interfaces/markers.interface';


@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css'
  ]
})

export class MarkersPageComponent {

  @ViewChild('map') divmap?: ElementRef

  public map?: Map;
  public markers: MarkerAndColor[] = [];
  public marker?: Marker
  public currentLngLat: LngLat = new LngLat(-4.17900, 40.54113)
  public zoom: number = 13


  ngAfterViewInit(): void {

    if (!this.divmap) throw "El elemento no fue encontrado"

    this.map = new Map({
      container: this.divmap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat,
      zoom: this.zoom // starting position [lng, lat]
    })
    this.readFromLocalStorage()

    // Crearla de forma estaticas
    // const markerHtml = document.createElement("div")
    // markerHtml.innerHTML = "Mario"

    // this.marker = new Marker({
    //   element: markerHtml
    // })
    //   .setLngLat(this.currentLngLat)
    //   .addTo(this.map)
  }

  addMarker(color: string, lnglat: LngLat) {
    if (!this.map) return

    this.marker = new Marker({
      color: color,
      draggable: true
    })
      .setLngLat(lnglat)
      .addTo(this.map)

    this.markers.push({
      color: color,
      marker: this.marker
    })
  }

  createMarker(): void {
    if (!this.map) return
    const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    const lnglat = this.map.getCenter()
    this.addMarker(color, lnglat)
  }

  flyToMarker(marker: Marker): void {
    if (!this.map) return
    this.map.flyTo({
      zoom: 14,
      center: marker.getLngLat(),
      speed: 1
    })

  }

  deleteMarker(i: number): void {
    this.markers[i].marker.remove()
    this.markers.splice(i, 1)
  }

  saveToLocalStorage(): void {
    const plainMarkers: PlainMarker[] = this.markers.map(({ color, marker }) => {
      return {
        color,
        lnglat: marker.getLngLat().toArray()
      }
    })
    localStorage.setItem("plainMarkers", JSON.stringify(plainMarkers))

  }

  readFromLocalStorage(): void {
    const plainMarkersString = localStorage.getItem("plainMarkers") ?? "[]";
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString)

    plainMarkers.forEach(({ color, lnglat }) => {
      const [lng, lat] = lnglat
      const coords = new LngLat(lng, lat)
      this.addMarker(color, coords)
    })
  }

}
