import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  // role: string="";

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

  // setUser(role: string){
  //   const token = localStorage.getItem("token");
  //   console.log(String(token))
  //   this.role= role;
  // }

  decodeToken(){
    const jwt = localStorage.getItem("token") as string;
    try {
      return jwt_decode(jwt);
    } catch(Error) {
      return null;
    }
    // return this.http.get(this.link+"getRole");
  }
}
