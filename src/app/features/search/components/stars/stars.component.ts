import { Component, Input } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-stars',
  template: `
    <div>
      <i
        *ngFor="let star of 5 | intToArray; let i = index"
        class="icon"
        [ngClass]="{
          'ion-ios-star': i < stars,
          'ion-ios-star-outline': i >= stars
        }"
      ></i>
    </div>
  `,
  styles: [],
})
export class StarsComponent {
  @Input() stars: number;
}
