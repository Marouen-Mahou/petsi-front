import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetAppointmentService {
  link = 'http://localhost:3000/'

  constructor(private http:HttpClient) { }

  getAppointments(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.link + 'appointments/pet/' + id);
  }

  addAppointment(appointment: Appointment): Observable<any> {
    return this.http.post(this.link + 'appointments', appointment);
  }

  updateAppointment(id: string, appointment: Partial<Appointment>): Observable<any> {
    return this.http.put(this.link + 'appointments/' + id, appointment)
  }

  deleteAppointment(id: string): Observable<any> {
    return this.http.delete(this.link + 'appointments/' + id)
  }

  getAllVets(): Observable<any> {
    return this.http.get(this.link + 'users/vets')
  }
}

interface Appointment {
  location:string,
  report:string,
  date: string,
  vet: any,
  pet: string,
  done: string,
}
