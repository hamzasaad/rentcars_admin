import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http:HttpClient) { }
  getReclation(){
    return this.http.get(`${environment.baseUrl}/users/reclamation/get`);
  }
  deleteProduct(id:any){
    return this.http.delete(`${environment.baseUrl}/users/reclamation/delete/${id}`)
   }
   getoneMessage(id:any){
    return this.http.get(`${environment.baseUrl}/users/reclamation/getone/${id}`);
   }
}
