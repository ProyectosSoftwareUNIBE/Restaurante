import {Injectable} from '@angular/core';
import {ShoppingItenModel} from 'src/app/model/shopping-iten.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    private shoppongCart: ShoppingItenModel[] = [];

    constructor() {
    }

    addProduct(item: ShoppingItenModel): void {
        this.shoppongCart.push(item);
        console.log(this.shoppongCart);
    }
}
