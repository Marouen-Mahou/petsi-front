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
    return this.http.get<any[]>(this.link);
  }

  addAppointment(appointment: Appointment): Observable<any> {
    return this.http.post(this.link, appointment);
  }
}

interface Appointment {
  location:string,
  description:string,
  date: string,
  vet: string,
  pet: string,
  done: boolean,
}