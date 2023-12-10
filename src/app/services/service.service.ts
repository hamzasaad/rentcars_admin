import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getService(){
    return this.http.get(`${environment.baseUrl}/users/service/get`);
  }
  deleteService(id:any){
    return this.http.delete(`${environment.baseUrl}/users/service/delete/${id}`)
   }
   addService(service:any){
    return this.http.post(`${environment.baseUrl}/users/service/add`,service)
  }
  getOneService(id:any){
    return this.http.get(`${environment.baseUrl}/users/service/getone/${id}`)
  }
  updateService(service:any,id:any){
    return this.http.put(`${environment.baseUrl}/users/service/update/${id}`,service)
  }
}
