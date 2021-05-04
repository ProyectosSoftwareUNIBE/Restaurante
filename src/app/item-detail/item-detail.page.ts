import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {ItemService} from 'src/app/api/item.service';
import {ItemModel} from 'src/app/model/item.model';
import {ShoppingItenModel} from 'src/app/model/shopping-iten.model';
import {ShoppingCartService} from "src/app/api/shopping-cart.service";

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.page.html',
    styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
    public id: string;
    public item: ItemModel;
    public shoppingItem: ShoppingItenModel;

    constructor(private route: ActivatedRoute, private navCtrl: NavController,
                private itemService: ItemService, private shoppingCartService: ShoppingCartService) {
        this.id = this.route.snapshot.paramMap.get('id');
        this.item = {};
        this.shoppingItem = {amount: 0};
    }

    ngOnInit() {
        this.getItemById();
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
        this.shoppingCartService.addProduct(this.shoppingItem);
    }

}
