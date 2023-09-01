import { Component } from '@angular/core';
import { MenuItem } from '../../../maps/interfaces/maps.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    {
      route: "/maps/fullscreen", name: "FullScreen"
    },
    {
      route: "/maps/zoom-range", name: "ZoomRange"
    },
    {
      route: "/maps/markers", name: "Markers"
    },
    {
      route: "/maps/properties", name: "House"
    },
    {
      route: "/alone", name: "Alone Page"
    },
  ]
}
