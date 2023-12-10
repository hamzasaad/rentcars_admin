import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  getclient() {
    return this.http.get(`${environment.baseUrl}/users/client/get`);
  }
  deleteclient(id:any){
    return this.http.delete(`${environment.baseUrl}/users/client/delete/${id}`)
   }
   updateClient(id: any) {
    return this.http.put(`${environment.baseUrl}/users/client/accept/${id}`,id)
  }
}
