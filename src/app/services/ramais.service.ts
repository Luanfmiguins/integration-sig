import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Ramais } from '../model/ramais.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RamaisService {
    baseUrl = `${environment.backendnest}ramais`;


    constructor(private http: HttpClient,private snackBar: MatSnackBar) { }
  
  
    create(ramais: Ramais): Observable<Ramais> {
      return this.http.post<Ramais>(`${environment.backendnest}ramais`, ramais);
    }
  
    read(): Observable<Ramais[]> {
      return this.http.get<Ramais[]>(`${environment.backendnest}ramais`);
    }
  
    readById(_id: string): Observable<Ramais> {
      return this.http.get<Ramais>(`${environment.backendnest}ramais/${_id}`);
    }
  
    update(ramais: Ramais): Observable<Ramais> {
      const url = `${this.baseUrl}/${ramais._id}`;
      return this.http.put<Ramais>(url, ramais);
    }
    delete(_id: string): Observable<Ramais> {
      const url = `${environment.backendnest}ramais/${_id}`;
      return this.http.delete<Ramais>(url);
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
  