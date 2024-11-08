import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  //recive token and wstorage it on local storage
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

 //return token from local storage 
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  //check token
  isLoggedIn() {
    return this.getToken() !== null;
  }

  //remove token from local storage and navigate
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  // login({ email, password }: any): Observable<any> {
  //   if (email === 'admin@gmail.com' && password === 'admin123') {
  //     this.setToken('abcdefghijklmnopqrstuvwxyz');
  //     return of({ name: 'Lakruwan', email: 'admin@gmail.com' });
  //   }
  //   return throwError(new Error('Failed to login'));
  // }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      // Admin login
      this.setToken('admin-token-abcdefghijklmnopqrstuvwxyz');
      return of({
        name: 'Lakruwan',
        email: 'admin@gmail.com',
        role: 'admin'
      });
    } else if (email === 'user@gmail.com' && password === 'user123') {
      // User login
      this.setToken('user-token-abcdefghijklmnopqrstuvwxyz');
      return of({
        name: 'John',
        email: 'user@gmail.com',
        role: 'user'
      });
    }
    return throwError(new Error('Failed to login'));
  }
  

}
