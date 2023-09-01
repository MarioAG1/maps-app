import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
// import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CounterAloneComponent],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css']
})
export class AlonePageComponent {

}
