import { Injectable } from '@angular/core';
import { ItemsInCart } from '../interfaces/itemsInCart';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  //TODO: globalCart must become constant in some way
  globalCart: Array<ItemsInCart> = []
  constructor() { }

  public setCart(cart: Array<ItemsInCart>) {
    this.globalCart = JSON.parse(JSON.stringify(cart));
  }

  public addToCart(item: ItemsInCart) {
    this.globalCart.push(item);
  }

  public removeFromCart(i: number) {
    this.globalCart.splice(i, 1);
  }

  public getCart(): Array<ItemsInCart> {
    return this.globalCart;
  }
}
