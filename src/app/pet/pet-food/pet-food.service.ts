import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  link = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  getFoods(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.link + 'foods/pet/' + id);
  }

  addFoods(vaccine: Food): Observable<any> {
    return this.http.post(this.link + 'foods', vaccine);
  }

  updateFood(id: string, vaccine: Partial<Food>): Observable<any> {
    return this.http.put(this.link + 'foods/' + id, vaccine)
  }

  deleteFood(id: string): Observable<any> {
    return this.http.delete(this.link + 'foods/' + id)
  }

  getAllVets(): Observable<any> {
    return this.http.get(this.link + 'users/vets')
  }
}

interface Food {
  name:string,
  quantity:string,
  date: string,
  vet: any,
  pet: string,
  done: string
}
