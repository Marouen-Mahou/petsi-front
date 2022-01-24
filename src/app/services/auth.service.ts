import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
// import { Observable, of } from 'rxjs';
// import { IUser } from './IUser';
// import { map } from 'rxjs/operators';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  login(credentials: any){
    return this.http.post(this.link+"login" , credentials);
  }

//   loggedIn(): boolean {
//     const token = localStorage.getItem('token');
//     return !this.helper.isTokenExpired(token);
//   }

//   logout() {
//     this.currentUser = {
//       username: null,
//       email: null,
//       role: null,
//       jobtitle: null,
//     };
//     localStorage.removeItem('token');
//   }

  register(model: any) {
    return this.http.post(this.link +"register", model);
  }

//   confirmEmail(model: any) {
//     return this.http.post(this.baseUrl + 'identity/confirmemail', model);
//   }
}
