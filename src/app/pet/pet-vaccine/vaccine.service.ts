import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {
  link = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  getVaccines(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.link + 'vaccines/pet/' + id);
  }

  addVaccines(vaccine: Vaccine): Observable<any> {
    return this.http.post(this.link + 'vaccines', vaccine);
  }

  updateVaccine(id: string, vaccine: Partial<Vaccine>): Observable<any> {
    return this.http.put(this.link + 'vaccines/' + id, vaccine)
  }

  deleteVaccine(id: string): Observable<any> {
    return this.http.delete(this.link + 'vaccines/' + id)
  }

  getAllVets(): Observable<any> {
    return this.http.get(this.link + 'users/vets')
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
