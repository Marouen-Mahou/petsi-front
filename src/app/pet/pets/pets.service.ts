import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PetsService {

  link = "http://localhost:3000/pets";


  constructor(private http: HttpClient) { }

  addPet(newPet: Pet): Observable<any> {
    return this.http.post(this.link, newPet);
  }

  getPets(){
    return this.http.get<any[]>(this.link);
  }

  getPet(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.link + '/' + id);
  }
}


interface Pet {
  name:string,
  gender: string,
  type: string,
  breed: string,
  birthday: string,
  sex: string,
  owner: string,
}
