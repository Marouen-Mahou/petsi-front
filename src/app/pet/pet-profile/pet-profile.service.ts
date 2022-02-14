
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetProfileService {

  
  link = "http://localhost:3000/pets";


  constructor(private http: HttpClient) { }

  getPet(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.link + '/one/' + id);
  }
}
