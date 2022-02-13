import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  link = "http://localhost:3000/";


  constructor(private http: HttpClient) { }

  getPatients(){
    return this.http.get<any[]>(this.link+"folders");
  }

  getPatient(id:any){
    return this.http.get(this.link+"folders/"+id);
  }
}
