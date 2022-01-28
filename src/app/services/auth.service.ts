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

  loggedIn(): boolean {
    return !! localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  register(data: any) {
    return this.http.post(this.link +"register", data);
  }

  forgot(data:any){
    return this.http.post(this.link+"forgotPassword", data);
  }

  reset(data:any){
    return this.http.post(this.link+"resetPassword", data);
  }

  confirm(data:any){
    console.log("token:", data);
    return this.http.post(this.link+"confirmEmail", data);
  }
}
