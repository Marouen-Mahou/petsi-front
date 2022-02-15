import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetBathService {
  link = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  getBaths(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.link + 'baths/pet/' + id);
  }

  addBaths(bath: Bath): Observable<any> {
    return this.http.post(this.link + 'baths', bath);
  }

  updateBath(id: string, bath: Partial<Bath>): Observable<any> {
    return this.http.put(this.link + 'baths/' + id, bath)
  }

  deleteBath(id: string): Observable<any> {
    return this.http.delete(this.link + 'baths/' + id)
  }

  getAllVets(): Observable<any> {
    return this.http.get(this.link + 'users/vets')
  }
}

interface Bath {
  description:string,
  date: string,
  pet: string,
  done: string
}
