import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'https://api-restuarante.herokuapp.com/auth/login';

  constructor(private http: HttpClient) { }

  login(user: UserModel): Observable<any> {
    return this.http.post(this.api, user).pipe(
      response => response
    )
  }
}
