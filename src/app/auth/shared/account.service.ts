import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient,private snackBar: MatSnackBar) { }

  async login(user: any) {
    const result = await this.http.post<any>(`${environment.backendnest}auth/login`, user).toPromise();
    if (result && result.access_token) {
      window.localStorage.setItem('token', result.access_token);
      return true;
    }

    return false;
  }

  createAccount(account: any) {
    return new Promise((resolve) => {
      resolve(true);
    });
  }
  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
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
  
}