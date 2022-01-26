import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {
  link = 'http://localhost:3000/vaccines/'
  constructor(private http:HttpClient) { }

  getVaccines(): Observable<any[]> {
    return this.http.get<any[]>(this.link);
  }

  addVaccines(vaccine: Vaccine): Observable<any> {
    console.log(vaccine)
    return this.http.post(this.link, vaccine);
  }
}

interface Vaccine {
  name:string,
  description:string,
  date: string,
  vet: string,
  pet: string,
  done: string
}
