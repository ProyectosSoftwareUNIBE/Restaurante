import { Component } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    user: UserModel = {};

    constructor(public alertController: AlertController, private router: Router, private authService: AuthService, private nativeStorage: NativeStorage) {
    }

    async presentAlert(messageString: string) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Alert',
            message: messageString,
            buttons: ['OK']
        });
        await alert.present();

        const { role } = await alert.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);
    }

    login(): void {
        this.authService.login(this.user).subscribe(
            response => {
                this.nativeStorage.setItem('myitem', { name: response.name })
                    .then(
                        () => this.router.navigate(['/tabs']),
                        error => {
                            this.router.navigate(['/tabs'])
                            console.error('Error storing item', error)
                        }
                    );

            }, error => {
                this.presentAlert(error.error.message);
            }


        )


    }


}
