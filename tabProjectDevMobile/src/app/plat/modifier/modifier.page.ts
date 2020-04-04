import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';
import { Plat } from 'src/app/Models/plat';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {

id: number;
platcourant: Plat;
  constructor(private activateRoute: ActivatedRoute, private service: PlatService, private router: Router) {
    this.id = Number(this.activateRoute.snapshot.paramMap.get('id'));

   }

   async ngOnInit() {
    await this.service.get(this.id).then(plat => {
      this.platcourant = plat;
      console.log(plat);
    }, error => {
      console.log('Une erreure est survenue');
    });

  }

   update() {
    this.service.update(this.platcourant).subscribe(() => {
      this.router.navigateByUrl('/tabs/plat');
    });
  }




}
