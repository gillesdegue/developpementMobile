import { Component, OnInit } from '@angular/core';
import { Commande } from '../models/commande';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {
  commandes: Commande [];
  typeAdmin: boolean;
  constructor(private commandeService:CommandeService) { }

  ngOnInit() {
  }
  ionViewWillEnter() { 
    if (window.localStorage.getItem("role")!= "admin") {
      this.commandeService.commandesUtilisateur(+window.localStorage.getItem("id")).subscribe(data => {
        this.commandes = data;
      }, error => {
        console.log('Une erreure est survenue');
      });

      }else {
        this.commandeService.commandes().subscribe(data => {
          this.commandes = data;
        }, error => {
          console.log('Une erreure est survenue');
        });
      }

  }

  delete(idCommande: number) {
    console.log("marche");
    this.commandeService.delete(+idCommande).subscribe(data => {
      if (window.localStorage.getItem("role")!= "admin") {
        this.commandeService.commandesUtilisateur(+window.localStorage.getItem("id")).subscribe(data => {
          this.commandes = data;
        }, error => {
          console.log('Une erreure est survenue');
        });
  
        }else {
          this.commandeService.commandes().subscribe(data => {
            this.commandes = data;
          }, error => {
            console.log('Une erreure est survenue');
          });
        }
      });

  }
}
