import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-compte',
  templateUrl: 'compte.page.html',
  styleUrls: ['compte.page.scss']
})
export class ComptePage {
  fichier: File;
  user : Utilisateur = new Utilisateur();
  username: string = window.localStorage.getItem("username");
  constructor(private route:Router,private authService: AuthService) {
    
  }
  deconnexion() {
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("role");
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("token");
    this.route.navigate(['/connexion']);
  }
  
  update(user: Utilisateur) {
    
    this.authService.update(user).subscribe(data=>{
      console.log(data);
    });
    
  }
  ionViewWillEnter() {
    this.authService.findMe().subscribe(data=>{
      this.user = data;
      console.log(this.user);
    }, error => {
      console.log("la recuperation de l'utilisateur grace au token a echouer");
      });
    }
}
