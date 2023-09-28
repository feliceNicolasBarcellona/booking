import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-hotel-list',
  template: `
    <div class="font-big">Hotel in {{ text }}</div>

    <div
      class="horiz-grid separator"
      *ngFor="let hotel of hotels"
      (click)="setActive.emit(hotel)"
      [ngClass]="{ active: hotel.id === active?.id }"
    >
      <div>{{ hotel.name }}</div>
      <div>da € {{ hotel.rooms[0].price }}</div>
    </div>

    <div class="separator"></div>
    <div class="horiz-grid">
      <div></div>
      <em *ngIf="hotels">{{ hotels.length }} results</em>
    </div>
  `,
  styles: [],
})
export class HotelListComponent {
  @Input() text: string;
  @Input() hotels: Hotel[];
  @Input() active: Hotel;
  @Output() setActive: EventEmitter<Hotel> = new EventEmitter<Hotel>()
}
