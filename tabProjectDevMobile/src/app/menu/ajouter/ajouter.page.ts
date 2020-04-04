import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { PlatService } from 'src/app/services/plat.service';
import { Plat } from 'src/app/Models/plat';
import { IonDatetime } from '@ionic/angular';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {
  plats_add : Array<any> = [];
  plats : Array<any>;
  menus : Menu = new Menu();
  // tslint:disable-next-line: max-line-length
  constructor( private router: Router, private menuService: MenuService, private platService: PlatService) {
    
   }

  ngOnInit() {
    /*this.menuService.get(1).subscribe(
      next => console.log(next)
    )*/
  }
 async add(menu: Menu) {
    console.log(menu.plats);
    this.menus.titre = menu.titre;
    this.menus.jour = menu.jour;
    console.log(this.menus.titre );
    for(let id of  menu.plats ) {
      console.log(id);

      await this.platService.get(+id).then(result => this.plats_add.push(result));

    }

    this.menus.plats = this.plats_add;
    console.log(this.plats_add.length);
    console.log(this.menus);
    this.menuService.add(this.menus).subscribe(result => console.log(result));
    this.router.navigate(['/tabs/menu']);
  }



  private getAllPlats() {
    this.platService.getAll().subscribe(data => {
      this.plats = data;
    },
    error => {
      console.log('Une erreure est survenue');
    });
  }
    ionViewWillEnter() {
      this.getAllPlats();
    }
}
