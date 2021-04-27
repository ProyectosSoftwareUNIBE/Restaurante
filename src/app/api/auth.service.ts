import {Injectable} from '@angular/core';
import {UserModel} from 'src/app/model/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private user: UserModel;

    constructor() {
    }

    login(user: UserModel): boolean {
        if (user.email === 'test@test.com' && user.password === '12345') {
            return true;
        }
        return false;
    }
}
