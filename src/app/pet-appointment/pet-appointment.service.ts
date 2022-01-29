import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetAppointmentService {
  link = 'http://localhost:3000/appointments/'

  constructor(private http:HttpClient) { }

  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(this.link + 'pet/619c0bf005aa5bbb9a5e3ca7');
  }

  addAppointment(appointment: Appointment): Observable<any> {
    return this.http.post(this.link, appointment);
  }

  updateAppointment(id: string, vaccine: Partial<Appointment>): Observable<any> {
    return this.http.put(this.link + id, vaccine)
  }

  deleteAppointment(id: string): Observable<any> {
    return this.http.delete(this.link + id)
  }
}

interface Appointment {
  location:string,
  description:string,
  date: string,
  vet: any,
  pet: string,
  done: boolean,
}