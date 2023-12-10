import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getategorys() {
    return this.http.get(`${environment.baseUrl}/users/category/get`);
  }
  deleteCategory(id: any) {
    return this.http.delete(`${environment.baseUrl}/users/category/delete/${id}`)
  }
  addCategory(categoryproduct: any) {
    return this.http.post(`${environment.baseUrl}/users/category/add`, categoryproduct)
  }
  getOneCategory(id: any) {
    return this.http.get(`${environment.baseUrl}/users/category/getone/${id}`)
  }
  updateCategory(category: any, id: any) {
    return this.http.put(`${environment.baseUrl}/users/category/update/${id}`, category)
  }
}
