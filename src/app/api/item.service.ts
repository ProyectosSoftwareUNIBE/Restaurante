import {Injectable} from '@angular/core';
import {ItemModel} from 'src/app/model/item.model';

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    private entradas: ItemModel[];

    constructor() {
        this.entradas = [
            {
                name: 'pan de ajo',
                description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
                imageURL: 'https://www.superama.com.mx/views/micrositio/recetas/images/comidaitaliana/pandeajo/Web_fotoreceta.jpg'
            }
        ];
    }

    public getAll(): ItemModel[] {
        return this.entradas;
    }
}
