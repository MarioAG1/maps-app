import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';

@Component({
  selector: 'maps-side-menu',
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
  ]
}
