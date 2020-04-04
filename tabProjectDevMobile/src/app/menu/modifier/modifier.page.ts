import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { PlatService } from 'src/app/services/plat.service';
import { Menu } from 'src/app/models/menu';
import { Plat } from 'src/app/Models/plat';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {
  id: number;
  plats_id: Array<number> = [];
  plats_add : Array<any> = [];
  plats : Array<any>;
  menus : Menu = new Menu();
  // tslint:disable-next-line: max-line-length
  constructor(private activateRoute: ActivatedRoute, private router: Router, private menuService: MenuService, private platService: PlatService) {
    this.id = Number(this.activateRoute.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    this.menuService.get(this.id).subscribe(data => {
      this.menus = data;
      // remplissage du tableau de id pour la verification au niveau du select
      data.plats.forEach(plat => {

        this.plats_id.push(plat.id);

      });



  });
  }

  async update(menu: Menu) {
    console.log(menu.plats);
    console.log(menu.titre);
    if(menu.titre!=""){
      this.menus.titre = menu.titre;
    }
    console.log("jour:"+menu.jour);
    if(menu.jour.toString()!="" ){
      this.menus.jour = menu.jour;
    }
    if(menu.plats.length!= 0){
      for(let id of  menu.plats ) {
        console.log(id);
  
        await this.platService.get(+id).then(result => this.plats_add.push(result));
  
      }
      this.menus.plats = this.plats_add;
    }
    

    
    console.log(this.plats_add.length);
    console.log(this.menus);
    this.menuService.update(this.menus).subscribe(result => console.log(result));
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
