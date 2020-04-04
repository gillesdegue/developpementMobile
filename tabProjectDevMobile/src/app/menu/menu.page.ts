import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage {
menus: Menu [];
typeAdmin: boolean;
  constructor(private router: Router, private service: MenuService) {}

  private getAllMenus() {
    this.service.getAll().subscribe(data => {
      this.menus = data;

    }, error => {
      console.log('Une erreure est survenue');
    });
  }

  ionViewWillEnter() {
    if (window.localStorage.getItem("role")!= "admin") {
      this.typeAdmin = false;
      }else {
        this.typeAdmin = true;
      }
    this.getAllMenus();
  }
    update(id: number): void {
      this.router.navigate(['/tabs/menu/modifier', id]);
    }

    show(id: number): void {
      this.router.navigate(['/tabs/menu/afficher', id]);
    }
    delete(id: number): void {
      console.log(id);
      this.service.delete(id).subscribe(data => {
        this.getAllMenus();
      });
    }

}
