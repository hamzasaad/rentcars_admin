import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http:HttpClient) { }
  updateImage(admin:any,id:any){
    return this.http.put(`${environment.baseUrl}/users/imageuser/${id}`,admin)
  }
  getOneAdmin(id:any){
    return this.http.get(`${environment.baseUrl}/users/getone/${id}`)
   }
   updateAdmin(admin:any,id:any){
    return this.http.put(`${environment.baseUrl}/users/updateuser/${id}`,admin)
  }
}
