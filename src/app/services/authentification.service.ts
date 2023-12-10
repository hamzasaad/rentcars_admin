import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient) { }
  registerAdmin(user:any){
    return this.http.post(`${environment.baseUrl}/users/admin/register`,user);
  }
  login(user: any) {
    return this.http.post(`${environment.baseUrl}/users/login`, user);
  }
}
