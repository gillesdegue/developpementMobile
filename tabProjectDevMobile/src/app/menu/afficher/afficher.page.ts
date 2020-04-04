import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { PlatService } from 'src/app/services/plat.service';
import { Menu } from 'src/app/models/menu';
import { CommandeService } from 'src/app/services/commande.service';
import { Commande } from 'src/app/models/commande';
import { DatePipe } from '@angular/common';
import { Plat } from 'src/app/Models/plat';

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.page.html',
  styleUrls: ['./afficher.page.scss'],
  providers: [DatePipe]
})
export class AfficherPage implements OnInit {
  menu : Menu = new Menu();
  commande : Commande = new Commande();
  id: number;
  statusMenu: string;
  menusDuMemeJour: Menu[];
  // tslint:disable-next-line: max-line-length
  constructor(private datepipe: DatePipe,private activateRoute: ActivatedRoute, private router: Router, private menuService: MenuService, private platService: PlatService,private commandeService: CommandeService) {
    //this.id = Number(this.activateRoute.snapshot.paramMap.get('id'));

   }
 
  ngOnInit() {
    // recuperation de la date pour la l'affichage du menu au client
    let dateDuJourFormater = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.menuService.menuDujour(dateDuJourFormater).subscribe(data => {

      this.menusDuMemeJour = data;
      if(this.menusDuMemeJour.length>0){
          this.menu = this.menusDuMemeJour[0];

      }else{
        this.statusMenu="vide";
      }

    }, error => {
      console.log('Une erreure est survenue');
    });


  }


  async commander( idMenu:number,idPlat: number) {
    
    // tslint:disable-next-line: forin
    this.commande.menu = this.menu;
    await this.platService.get(+idPlat).then(result => {this.commande.plat=result;
       
    });
   // await this.menuService.get(+this.menu.id).subscribe(result => this.commande.menu=result);
    console.log(this.commande.plat)
    this.commande.utilisateur = window.localStorage.getItem("id");
    console.log(this.commande.menu);
    this.commandeService.add(this.commande).subscribe(data => {
      console.log(data);
     // data.menu = this.menu;

      });

  }

}
