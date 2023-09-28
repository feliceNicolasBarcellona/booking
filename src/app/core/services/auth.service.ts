// core/services/auth.service.ts
import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Auth } from '../../model/auth';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data: Auth | null = null;
  error: HttpErrorResponse | null = null;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login({user, pass}: {user: string, pass: string}) {
    this.error = null;

    const params = new HttpParams()
      .set('user', user)
      .set('pass', pass);
    /*
    // ORGINAL VERSION
    this.http.get<Auth>(`http://localhost:3000/login`, { params })
      .subscribe(
        res => {
          this.data = res;
          this.router.navigateByUrl('search');
        },
        err => this.error = err
      );
    */

    // VERIONE Angular 13.2 & RxJS 7.5
    this.http.get<Auth>(`http://localhost:3000/login`, { params })
      .pipe(
        catchError(err => of(err))
      )
      .subscribe((res: Auth | HttpErrorResponse) => {
        if (res instanceof HttpErrorResponse) {
          this.error = res
        } else {
          this.data = res;
          localStorage.setItem('authenticated', 'true');
          this.router.navigateByUrl('search');
        }
      });
  }

  logout() {
    this.data = null;
    localStorage.removeItem('authenticated');
    this.router.navigateByUrl('login');
  }

  isLogged() {
    return !!localStorage.getItem('authenticated')
    // return !!(this.data && this.data.token);
  }
}
