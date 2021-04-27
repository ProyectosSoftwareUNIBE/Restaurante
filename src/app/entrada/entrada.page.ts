import {Component, OnInit} from '@angular/core';
import {ItemService} from 'src/app/api/item.service';
import {ItemModel} from 'src/app/model/item.model';

@Component({
    selector: 'app-entrada',
    templateUrl: './entrada.page.html',
    styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit {
    public entradas: ItemModel[];

    constructor(private itemService: ItemService) {
    }

    ngOnInit() {
        this.synch();
    }

    synch(): void {
        this.entradas = this.itemService.getAll();
        console.log(this.entradas);
    }

}
