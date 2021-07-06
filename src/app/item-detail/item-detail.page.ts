import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ItemModel } from 'src/app/model/item.model';
import { ShoppingItemModel } from 'src/app/model/shopping-item.model';
import { ShoppingHelpModel } from '../model/shopping-help.model';
import { ItemService } from '../service/item.service';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  public id: string;
  public item: ItemModel;
  public shoppingItem: ShoppingItemModel;
  public shoppingHelp: ShoppingHelpModel = { total: 0, items: 0 };

  constructor(private route: ActivatedRoute, private navCtrl: NavController,
    private itemService: ItemService, private shoppingCartService: ShoppingCartService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.item = {};
    this.shoppingItem = { amount: 0 };
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
      this.itemService.getById(this.id).subscribe(
        response => {
          console.log(response);
          this.item = response;
          this.shoppingItem.item = this.item;
        }
      );
    }
  }

  agregar(): void {
    let shoppingItemHelp: ShoppingItemModel = {};
    shoppingItemHelp = { amount: this.shoppingItem.amount, item: this.shoppingItem.item };
    this.shoppingCartService.addProduct(shoppingItemHelp);
    this.getShoppingCart();
  }

  getShoppingCart(): void {
    this.shoppingHelp = this.shoppingCartService.getShoppingCart();

  }


}
