import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryproductService {

  constructor(private http: HttpClient) { }
  getCateagorypro() {
    return this.http.get(`${environment.baseUrl}/users/categoryproduct/get`);
  }
  deleteCategorypro(id: any) {
    return this.http.delete(`${environment.baseUrl}/users/categoryproduct/delete/${id}`)
  }
  addCategorypro(categoryproduct: any) {
    return this.http.post(`${environment.baseUrl}/users/categoryproduct/save`, categoryproduct)
  }
  getOneCategorypro(id: any) {
    return this.http.get(`${environment.baseUrl}/users/categoryproduct/getone/${id}`)
  }
  updateCategorypro(category: any, id: any) {
    return this.http.put(`${environment.baseUrl}/users/categoryproduct/update/${id}`, category)
  }
}
