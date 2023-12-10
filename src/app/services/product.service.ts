import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get(`${environment.baseUrl}/users/produit/get`);
  }
  getOneProduct(id:any){
    return this.http.get(`${environment.baseUrl}/users/produit/getone/${id}`)
   }
   updateProduct(produit:any,id:any,id_categoryproduit:any){
    return this.http.put(`${environment.baseUrl}/users/produit/update/${id}/${id_categoryproduit}`,produit)
  }
  deleteProduct(id:any){
    return this.http.delete(`${environment.baseUrl}/users/produit/delete/${id}`)
   }
  addProduct(produit:any,id_categoryproduct:any){
    return this.http.post(`${environment.baseUrl}/users/produit/add/${id_categoryproduct}`,produit)
  }
}
