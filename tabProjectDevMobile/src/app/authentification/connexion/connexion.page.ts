import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/models/menu';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  token: string;
  loginForm: FormGroup;
  menu: Menu[];
 // tslint:disable-next-line: max-line-length
 constructor(private menuService: MenuService,private service : AuthService, private toastController: ToastController, private route : Router) { }
 ngOnInit() {
 
 }
 async login(userInfo: any)
 {
 console.log(this.service.redirectUrl);
 await this.service.login(userInfo).subscribe(data => {
  this.token = data['jwt'];
  console.log(this.token);
  window.localStorage.setItem('role', data['user'].role.name);
  window.localStorage.setItem('id', data['user'].id);
  window.localStorage.setItem('username', data['user'].username);
  window.localStorage.setItem('token', this.token);
  if (data['user'].role.name != "admin"){

        this.route.navigate(['/tabs/menu/afficher']);
    } else {
  this.route.navigateByUrl(this.service.redirectUrl);
  }
 }, error => {
 console.log('Nom d\'utilisateur ou mot de passe incorrect');
 });
 }
}
