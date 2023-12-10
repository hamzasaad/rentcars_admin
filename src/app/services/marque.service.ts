import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  constructor(private http:HttpClient) { }
  getMarques(){
    return this.http.get(`${environment.baseUrl}/users/marque/get`);
  }
  deleteMarque(id:any){
    return this.http.delete(`${environment.baseUrl}/users/marque/delete/${id}`)
   }
   addMarque(marque:any){
    return this.http.post(`${environment.baseUrl}/users/marque/add`,marque)
  }
  getOneMarque(id:any){
    return this.http.get(`${environment.baseUrl}/users/marque/getone/${id}`)
  }
  updateMarque(marque:any,id:any){
    return this.http.put(`${environment.baseUrl}/users/marque/update/${id}`,marque)
  }
}
