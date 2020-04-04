import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  resetPassword(email:string){
    this.authService.findOneByEmail(email["email"]).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl('/new-password/'+data["0"].id);
    }, error => {
      console.log("l'email n'existe pas");
      });
  }
}
