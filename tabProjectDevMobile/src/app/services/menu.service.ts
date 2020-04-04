import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu';
import {HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  dateDuJour:Date;
  constructor(private http: HttpClient) { }
  public add(menu: Menu): Observable<Menu> {
    return this.http.post<Menu>('http://localhost:1337/menus', menu, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe();
   }
  public getAll(): Observable<Menu[]> {
     return this.http.get<Menu[]>('http://localhost:1337/menus').pipe();

   }
   public update(menu: Menu): Observable<Menu>   {
     return this.http.put<Menu>('http://localhost:1337/menus/' + menu.id, menu).pipe();
   }
   public get(id: number): Observable<Menu> {
     return this.http.get<Menu>('http://localhost:1337/menus/' + id).pipe();
   }
   public delete(id: number) {
     return this.http.delete('http://localhost:1337/menus/' + id).pipe();
   }
   public menuDujour(dateDuJourFormater: string): Observable<Menu[]> {

    return this.http.get<Menu[]>('http://localhost:1337/menus?jour=' + dateDuJourFormater).pipe();
  }
}


