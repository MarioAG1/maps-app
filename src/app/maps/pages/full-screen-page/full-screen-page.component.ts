import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl'


@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css'
  ]
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('map') divmap?: ElementRef

  ngAfterViewInit(): void {

    if (!this.divmap) throw "El elemento no fue encontrado"

    const map = new Map({
      container: this.divmap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    })
  }
}
