import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http:HttpClient) { }
  getMembers(){
    return this.http.get(`${environment.baseUrl}/users/member/get`);
  }
  deleteMember(id:any){
    return this.http.delete(`${environment.baseUrl}/users/member/delete/${id}`)
   }
   addMember(voiture:any){
    return this.http.post(`${environment.baseUrl}/users/member/save`,voiture)
  }
  getOneMembers(id:any){
    return this.http.get(`${environment.baseUrl}/users/member/getone/${id}`)
  }
  updateMember(voiture:any,id:any){
    return this.http.put(`${environment.baseUrl}/users/member/update/${id}`,voiture)
  }
}
