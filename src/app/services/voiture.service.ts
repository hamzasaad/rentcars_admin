import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http:HttpClient) { }

  getVoitures(){
    return this.http.get(`${environment.baseUrl}/users/voiture/get`);
  }
  getOneVoiture(id:any){
    return this.http.get(`${environment.baseUrl}/users/voiture/getone/${id}`)
   }
   updateVoiture(voiture:any,id:any,id_category:any,id_marque:any){
    return this.http.put(`${environment.baseUrl}/users/voiture/update/${id}/${id_category}/${id_marque}`,voiture)
  }

  updateVoiture2(voiture:any,id:any,id_category:any,id_marque:any){
    return this.http.put(`${environment.baseUrl}/users/voiture/update2/${id}/${id_category}/${id_marque}`,voiture)
  }

  deleteVoiture(id:any){
    return this.http.delete(`${environment.baseUrl}/users/voiture/delete/${id}`)
   }
  addVoiture(voiture:any,id_category:any,id_marque:any){
    return this.http.post(`${environment.baseUrl}/users/voiture/add/${id_category}/${id_marque}`,voiture)
  }
  getCategory(){
    return this.http.get(`${environment.baseUrl}/users/category/get`)
  }
  getMarque(){
    return this.http.get(`${environment.baseUrl}/users/marque/get`)
  }

}
