import {Component} from '@angular/core';
import {UserModel} from 'src/app/model/user.model';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/api/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    user: UserModel = {};

    constructor(public alertController: AlertController, private router: Router, private authService: AuthService) {
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Alert',
            message: 'Los datos ingresados no son los correctos',
            buttons: ['OK']
        });
        await alert.present();

        const {role} = await alert.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);
    }

    login(): void {
        if (this.authService.login(this.user)) {
            this.router.navigate(['/tabs']);
        } else {
            this.presentAlert();
        }


    }


}
