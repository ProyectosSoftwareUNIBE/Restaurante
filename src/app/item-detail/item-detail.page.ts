import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {ItemService} from 'src/app/api/item.service';
import {ItemModel} from 'src/app/model/item.model';
import {ShoppingItemModel} from 'src/app/model/shopping-item.model';
import {ShoppingCartService} from 'src/app/api/shopping-cart.service';
import {ShoppingHelpModel} from '../model/shopping-help.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  public id: string;
  public item: ItemModel;
  public shoppingItem: ShoppingItemModel;
  public shoppingHelp: ShoppingHelpModel = {total: 0, items: 0};

  constructor(private route: ActivatedRoute, private navCtrl: NavController,
              private itemService: ItemService, private shoppingCartService: ShoppingCartService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.item = {};
    this.shoppingItem = {amount: 0};
  }

  ngOnInit() {
    this.getItemById();
    this.getShoppingCart();
  }

  return(): void {
    this.navCtrl.back();
  }

  getItemById(): void {
    if (this.id != null) {
      this.item = this.itemService.getById(this.id);
      this.shoppingItem.item = this.item;
    }
  }

  agregar(): void {
    let shoppingItemHelp: ShoppingItemModel = {};
    shoppingItemHelp = {amount: this.shoppingItem.amount, item: this.shoppingItem.item};
    this.shoppingCartService.addProduct(shoppingItemHelp);
    this.getShoppingCart();
  }

  getShoppingCart(): void {
    this.shoppingHelp = this.shoppingCartService.getShoppingCart();

  }


}
