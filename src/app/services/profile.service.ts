import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  link = "http://localhost:3000/users/";

  constructor(private http: HttpClient) {}

  getUser(id:string){
    return this.http.get(this.link+id);
  }

  editUser(id:string,user:any){
    return this.http.put(this.link+id,user);
  }
}
