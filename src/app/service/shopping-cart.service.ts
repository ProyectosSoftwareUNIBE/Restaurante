import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingItemModel } from 'src/app/model/shopping-item.model';
import { ShoppingHelpModel } from '../model/shopping-help.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart: ShoppingItemModel[] = [];
  private api = 'http://localhost:3000/shopping-cart';
  constructor(private http: HttpClient) {
  }

  addProduct(item: ShoppingItemModel): void {
    this.shoppingCart.push(item);
    console.log(this.shoppingCart);
  }

  deleteProduct(position: number): void {
    this.shoppingCart.splice(position, 1);
  }

  getShoppingCart(): ShoppingHelpModel {
    let money = 0;
    let response: ShoppingHelpModel = {};
    let itemsShoppingCart = 0;
    this.shoppingCart.forEach((shoppingItemModel) => {
      money += (shoppingItemModel.amount * shoppingItemModel.item.price);
      itemsShoppingCart += shoppingItemModel.amount;
    });
    response = { total: money, items: itemsShoppingCart };
    return response;
  }

  getShoppingCartDetail(): ShoppingItemModel[] {
    return this.shoppingCart;
  }

  clearShoppingCart(): void {
    this.shoppingCart = [];
  }

  sendShoppingCart(): Observable<any> {
    console.log(this.shoppingCart);
    return this.http.post(this.api, { shoppingCart: this.shoppingCart }).pipe(
      response => response
    )
  }

}
