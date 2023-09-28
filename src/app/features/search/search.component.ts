import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/app/model/hotel';
import { CartService } from 'src/app/core/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  text: string = 'Milano';
  hotels: Hotel[];
  active: Hotel | undefined;
  activeImage: string | undefined

  constructor(private http: HttpClient, public cart: CartService, private router: Router) {
    this.searchHotels(this.text);
  }

  searchHotels(text: string) {
    this.text = text;
    this.http
      .get<Hotel[]>(`http://localhost:3000/hotels?q=${text}`)
      .subscribe((res) => {
        if(!res.length){
          this.router.navigateByUrl('search/no-results')
          return
        }
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

  // addToCart(room: Room, active: Hotel){
  //   this.cart.addToCart(active, room);
  // }
}
