import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  utilisateur: Utilisateur ;
  constructor(private authentificationService: AuthService,private route: Router) {  }

  ngOnInit() {
  }
  register(user: Utilisateur){
    
    this.authentificationService.register(user).subscribe(data => {
        console.log(data);
        this.route.navigate(['/connexion']);

    }, error => {
      console.log('Une erreure est survenue');
    });
  }
}
