import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  link = "http://localhost:3000/";


  constructor(private http: HttpClient) { }

  getPatients(id:string){
    return this.http.get<any[]>(this.link+"folders/vetFolders/"+id);
  }

  getRequests(id:string){
    return this.http.get<any[]>(this.link+"folders/vetRequests/"+id);
  }

  getPatient(id:string){
    return this.http.get(this.link+"folders/"+id);
  }

  acceptRequest(id:string){
    return this.http.patch(this.link+"folders/accept/"+id,{})
  }

  declineRequest(id:string){
    return this.http.delete(this.link+"folders/"+id);
  }
}
