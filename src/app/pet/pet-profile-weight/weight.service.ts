import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeightService {
  link = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  updateWeight(petId: string, newWeight: string): Observable<any> {
    return this.http.patch(this.link + 'pets/' + petId, {weight: newWeight});
  }
}
