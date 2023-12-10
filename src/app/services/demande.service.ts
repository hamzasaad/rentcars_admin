import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) { }
  getDemande() {
    return this.http.get(`${environment.baseUrl}/users/demande/get`);
  }
  getOneDemande(id: any) {
    return this.http.get(`${environment.baseUrl}/users/demande/getone/${id}`)
  }
  deleteDemande(id: any) {
    return this.http.delete(`${environment.baseUrl}/users/demande/delete/${id}`)
  }
  acceptDemande(id:any){
    return this.http.post(`${environment.baseUrl}/users/demande/accept/${id}`,id)
  }
  updateDemande(demande:any,id:any,id_voiture:any,id_client:any){
    return this.http.put(`${environment.baseUrl}/users/demande/update/${id}/${id_voiture}/${id_client}`,demande)
  }
}
