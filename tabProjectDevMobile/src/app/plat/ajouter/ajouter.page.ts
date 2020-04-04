import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';
import { Plat } from 'src/app/Models/plat';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {

  plats = [];

  constructor(private router: Router, private service: PlatService) {}

  add(plat: Plat) {
    this.service.add(plat).subscribe(data => {
        this.router.navigate(['/tabs/plat']);

    });
  }

  ngOnInit() {
  }

}
