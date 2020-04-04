import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnInit {
  id: number;
  constructor(private activateRoute: ActivatedRoute,private authService: AuthService,private router: Router) {
    this.id = Number(this.activateRoute.snapshot.paramMap.get('id'));
   }
  
  ngOnInit() {
  }
  newPassword(password : any[]){
    console.log(password);
    if(password["password"]=== password["passwordConfirm"]){
      this.authService.findOne(this.id).subscribe(data=>{
        console.log(data);
        data.password = password["password"];
        this.authService.updatePassword(data).subscribe(data=>{
          console.log(data);
          this.router.navigateByUrl('/connexion');
        });
  
      }, error => {
        console.log("l'email n'existe pas");
        });
    }
    
  }
}
