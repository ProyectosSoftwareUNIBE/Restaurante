import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemModel } from '../model/item.model';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private api = 'https://api-restuarante.herokuapp.com/product';

  constructor(private http: HttpClient) { }

  getByCategory(category: string): Observable<any> {
    return this.http.get(this.api + '/category/' + category).pipe(
      response => response
    )
  }

  getById(id: string): Observable<any> {
    return this.http.get(this.api + "/" + id).pipe(
      response => response
    )
  }
}
