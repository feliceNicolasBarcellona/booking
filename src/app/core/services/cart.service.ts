import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { Hotel, Room } from 'src/app/model/hotel';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: CartItem[] = [];

  constructor(private auth: AuthService){

  }

  addToCart(hotel: Hotel | undefined, room: Room | undefined) {
    // this.items.push({
    //   hotel: hotel,
    //   room: room,
    //   creationDate: Date.now()
    // })
    if (hotel && room) {
      this.items = [
        ...this.items,
        {
          hotel: hotel,
          room: room,
          creationDate: Date.now(),
        },
      ];
    }
  }

  removeFromCart(cartItem: CartItem) {
    this.items = this.items.filter(
      (el) => el.creationDate !== cartItem.creationDate
    );
  }

  proceed(){
    window.alert(`
    Total items: ${this.items.length}
    Order: ${this.auth.data.name}
  `)}
}
