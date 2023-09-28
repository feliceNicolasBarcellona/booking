import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hotel-form',
  template: `
    <form #f="ngForm" (submit)="searchHandler()">
      <input
        type="text"
        placeholder="City (Rome or Milan)"
        [ngModel]="text"
        name="text"
      />
      <button type="submit">SEARCH</button>
    </form>
  `,
  styles: [],
})
export class HotelFormComponent {
  @Input() text: string;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('f') form: NgForm | undefined;

  searchHandler(){
    this.search.emit(this.form?.value.text)
  }

}
