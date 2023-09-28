import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/model/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  data: Auth;
  error: any;

  constructor(private http: HttpClient, private route: Router) {}

  login({ user, pass }) {
    this.error =  null
    const params = new HttpParams().set('user', user).set('pass', pass);

    this.http.get<Auth>('http://localhost:3000/login', { params }).subscribe(
      (res) => {
        this.data = res;
        this.route.navigateByUrl('search');
      },
      (err) => (this.error = err)
    );
  }

  logout() {
    this.data = null;
    this.route.navigateByUrl('login');
  }

  isLogged() {
    //return !!(this.data && this.data.token);
    return true
  }
}
