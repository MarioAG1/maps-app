import { AfterViewInit, Component } from '@angular/core';

import * as  mapboxgl from 'mapbox-gl'
(mapboxgl as any).accessToken = "pk.eyJ1IjoibWFyaW9hZzEiLCJhIjoiY2xseGx0dGt2MDNuczNxbWhwazF6NzEzOSJ9.7rhWGA5qKEO0NG6XFnGk5g"


@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: [ './full-screen-page.component.css'
  ]
})
export class FullScreenPageComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    })
  }
}
