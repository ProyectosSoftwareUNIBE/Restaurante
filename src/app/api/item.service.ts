import {Injectable} from '@angular/core';
import {ItemModel} from 'src/app/model/item.model';

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    private entradas: ItemModel[] = [
        {
            id: '1',
            name: 'pan de ajo',
            description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
            imageURL: 'https://www.superama.com.mx/views/micrositio/recetas/images/comidaitaliana/pandeajo/Web_fotoreceta.jpg',
            price:2.10
        },
        {
            id: '2',
            name: 'pan de ajo especial',
            description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
            imageURL: 'https://www.superama.com.mx/views/micrositio/recetas/images/comidaitaliana/pandeajo/Web_fotoreceta.jpg',
            price: 3.20
        }
    ];

    constructor() {
    }

    public getAll(): ItemModel[] {
        return this.entradas;
    }

    public getById(id: string): ItemModel {
        return this.entradas.find(item => item.id === id);
    }
}
