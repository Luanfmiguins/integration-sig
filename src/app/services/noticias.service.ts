import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Noticias } from '../model/noticias.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
    baseUrl = `${environment.backendnest}noticias`;


    constructor(private http: HttpClient,private snackBar: MatSnackBar) { }
  
  
    create(noticias: Noticias): Observable<Noticias> {
      return this.http.post<Noticias>(`${environment.backendnest}noticias`, noticias);
    }
  
    read(): Observable<Noticias[]> {
      return this.http.get<Noticias[]>(`${environment.backendnest}noticias`);
    }
  
    readById(_id: string): Observable<Noticias> {
      return this.http.get<Noticias>(`${environment.backendnest}noticias/${_id}`);
    }
  
    update(noticias: Noticias): Observable<Noticias> {
      const url = `${this.baseUrl}/${noticias._id}`;
      return this.http.put<Noticias>(url, noticias);
    }
    delete(_id: string): Observable<Noticias> {
      const url = `${environment.backendnest}noticias/${_id}`;
      return this.http.delete<Noticias>(url);
    }
    
    snackbarSuccess(msg: string) {
      this.snackBar.open(msg, '',{
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'top',
        panelClass: ['snack-bar-sucess']
      },);
    }
  
    snackbarError(msg: string) {
      this.snackBar.open(msg, '',{
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'top',
        panelClass: ['snack-bar-err']
      },);
    }
    snackbarView(msg: string) {
      this.snackBar.open(msg, '',{
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'top',
        panelClass: ['snack-bar-view']
      },);
    }
  }
  