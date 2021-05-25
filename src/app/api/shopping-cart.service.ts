import {Injectable} from '@angular/core';
import {ShoppingItemModel} from 'src/app/model/shopping-item.model';
import {ShoppingHelpModel} from '../model/shopping-help.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart: ShoppingItemModel[] = [];

  constructor() {
  }

  addProduct(item: ShoppingItemModel): void {
    this.shoppingCart.push(item);
    console.log(this.shoppingCart);
  }

  getShoppingCart(): ShoppingHelpModel {
    let money = 0;
    let response: ShoppingHelpModel = {};
    let itemsShoppingCart = 0;
    this.shoppingCart.forEach((shoppingItemModel) => {
      money += (shoppingItemModel.amount * shoppingItemModel.item.price);
      itemsShoppingCart += shoppingItemModel.amount;
    });
    response = {total: money, items: itemsShoppingCart};
    return response;
  }

}
