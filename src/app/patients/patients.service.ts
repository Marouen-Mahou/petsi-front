import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  link = "http://localhost:3000/folders/";


  constructor(private http: HttpClient) { }

  getPatients(id:string){
    return this.http.get<any[]>(this.link+"vetFolders/"+id);
  }

  getRequests(id:string){
    return this.http.get<any[]>(this.link+"vetRequests/"+id);
  }

  getPatient(id:string){
    return this.http.get(this.link+id);
  }

  acceptRequest(id:string){
    return this.http.patch(this.link+"accept/"+id,{})
  }

  declineRequest(id:string){
    return this.http.delete(this.link+id);
  }

  addRapport(id:string,rapport:string){
    return this.http.patch(this.link+"addRapport/"+id,{rapport})
  }
}
