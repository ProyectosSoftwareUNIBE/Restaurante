import {Injectable} from '@angular/core';
import {UserModel} from 'src/app/model/user.model';
import {NativeStorage} from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: UserModel;

  constructor(private nativeStorage: NativeStorage) {
  }

  login(user: UserModel): boolean {
    if (user.name === 'test@test.com' && user.password === '12345') {
      this.nativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
        .then(
          () => console.log('Stored item!'),
          error => console.error('Error storing item', error)
        );
      return true;
    }
    return false;
  }
}
