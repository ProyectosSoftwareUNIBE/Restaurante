import {Component, OnInit} from '@angular/core';
import {ShoppingItemModel} from '../model/shopping-item.model';
import {ShoppingCartService} from '../api/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {
  public shoppingCart: ShoppingItemModel[];

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.synch();
  }

  synch(): void {
    this.shoppingCart = this.shoppingCartService.getShoppingCartDetail();
    console.log(this.shoppingCart);
  }

  delete(position: number): void {
    this.shoppingCartService.deleteProduct(position);
    this.synch();
  }

}
