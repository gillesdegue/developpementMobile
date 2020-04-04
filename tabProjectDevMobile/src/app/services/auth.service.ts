import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;
  constructor(private http: HttpClient) { }
  login(user: Utilisateur ){
    console.log(user);
    return this.http.post('http://localhost:1337/auth/local', user).pipe();
  }
  update(user: Utilisateur ){
    console.log(user);
    return this.http.put('http://localhost:1337/users/' + window.localStorage.getItem("id"), user,{
      headers: { 'Authorization': 'Bearer '+ window.localStorage.getItem("token")}}).pipe();
  }
  findMe( ) : Observable<Utilisateur>{
    console.log();
    return this.http.get<Utilisateur>('http://localhost:1337/users/me',{
      headers: { 'Authorization': 'Bearer '+ window.localStorage.getItem("token")}}).pipe();
  }
  findOneByEmail( email: string) : Observable<Utilisateur>{
    
    return this.http.get<Utilisateur>('http://localhost:1337/users?email=' + email).pipe();
  }

  findOne( id: number) : Observable<Utilisateur>{
    
    return this.http.get<Utilisateur>('http://localhost:1337/users/' + id).pipe();
  }
  updatePassword( user: Utilisateur) : Observable<Utilisateur>{
    
    return this.http.put<Utilisateur>('http://localhost:1337/users/'+user.id, user).pipe();
  }
  register(user: Utilisateur){
    return this.http.post('http://localhost:1337/auth/local/register', user).pipe();
  }
  uploadImage(file: any[]){
    return this.http.post('http://localhost:1337/upload/', file).pipe();
  }
  
}
