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
    return this.http.get<any[]>(this.link + 'pet/619c0bf005aa5bbb9a5e3ca7');
  }

  addVaccines(vaccine: Vaccine): Observable<any> {
    return this.http.post(this.link, vaccine);
  }

  updateVaccine(id: string, vaccine: Partial<Vaccine>): Observable<any> {
    return this.http.put(this.link + id, vaccine)
  }

  deleteVaccine(id: string): Observable<any> {
    return this.http.delete(this.link + id)
  }
}

interface Vaccine {
  name:string,
  description:string,
  date: string,
  vet: any,
  pet: string,
  done: string
}
