import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }
  getOneDemande(id: any) {
    return this.http.get(`${environment.baseUrl}/users/demande/getone/${id}`);
  }
  saveResult(result: any, id_demande: any) {
    return this.http.post(`${environment.baseUrl}/users/contrat/saver/${id_demande}`, result);
  }

  getAllcontract() {
    return this.http.get(`${environment.baseUrl}/users/contrat/getr`);
  }

  deleteContract(id: any) {
    return this.http.delete(`${environment.baseUrl}/users/contrat/deleter/${id}`)
  }


}
