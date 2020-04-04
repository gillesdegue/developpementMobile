import { Injectable } from '@angular/core';
import {Plat} from '../Models/plat';
import { Observable} from 'rxjs';
import {HttpClient } from '@angular/common/http';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http: HttpClient) { }
 public add(plat: Plat):Observable<Plat>{
   return this.http.post<Plat>('http://localhost:1337/plats',plat).pipe(); 
  }
 public getAll():Observable<Plat[]>
  {
    return this.http.get<Plat[]>('http://localhost:1337/plats').pipe();
     
  }
  public update(plat: Plat):Observable<Plat>
  {
    return this.http.put<Plat>('http://localhost:1337/plats/' + plat.id, plat).pipe();
  }

  public get(id: number)
  {
      const result = this.http.get<Plat>('http://localhost:1337/plats/'+id).toPromise();
      return result;
  }

  public delete(id: number)
  {
    return this.http.delete('http://localhost:1337/plats/'+id).pipe();
  }

}
