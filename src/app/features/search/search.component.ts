import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  text: string = 'Milan';
  hotels! : Hotel[];

  constructor(private http: HttpClient) {
    this.searchHotels(this.text);
  }

  searchHotels(text: string) {
    this.text = text;
    this.http.get<Hotel[]>(`http://localhost:3000/hotels?q=${text}`).subscribe((res) => {
      this.hotels = res;
    });
  }
}
