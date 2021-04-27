import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.page.html',
    styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
    public id: string;

    constructor(private route: ActivatedRoute, private navCtrl: NavController) {
        this.id = this.route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        console.log(this.id);
    }

    return(): void {
        this.navCtrl.back();
    }

}
