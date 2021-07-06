import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { ItemModel } from 'src/app/model/item.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-entrada',
    templateUrl: './entrada.page.html',
    styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit {
    public entradas: ItemModel[];

    constructor(private itemService: ItemService, private rout: Router) {
    }

    ngOnInit() {
        this.synch();
    }

    synch(): void {
        this.itemService.getByCategory('entradas').subscribe(
            response => {
                this.entradas = response;
                console.log(response);
            }
        );
    }

    navigateToDetail(item: ItemModel): void {

        this.rout.navigate(['/item-detail/' + item._id]);
    }

}
