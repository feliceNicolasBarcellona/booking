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
  hotels!: Hotel[];
  active: Hotel | undefined;
  activeImage: string | undefined
  stars: any[] = [0,1,2,3,4]

  constructor(private http: HttpClient) {
    this.searchHotels(this.text);
  }

  searchHotels(text: string) {
    this.text = text;
    this.http
      .get<Hotel[]>(`http://localhost:3000/hotels?q=${text}`)
      .subscribe((res) => {
        this.hotels = res;
        this.setActive(this.hotels[0])
      });
  }

  setActive(hotel: Hotel) {
    this.active = hotel;
    this.activeImage  =  hotel.images[0]
  }

  sendEmail({email, message}: {email:string, message:string}){
    window.alert(`your ${message} with ${email} was sent at ${this.active!.email}`)
  }
}
