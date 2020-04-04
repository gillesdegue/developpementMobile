import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }

  public add(commande: Commande): Observable<Commande> {
    return this.http.post<Commande>('http://localhost:1337/commandes', commande, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe();
   }
   public commandesUtilisateur(idUtilisateur: number): Observable<Commande[]> {

    return this.http.get<Commande[]>('http://localhost:1337/commandes?utilisateur=' + idUtilisateur).pipe();
  }
  public commandes(): Observable<Commande[]> {

    return this.http.get<Commande[]>('http://localhost:1337/commandes').pipe();
  }
  public delete(id: number) {
    return this.http.delete('http://localhost:1337/commandes/' + id).pipe();
  }
}
