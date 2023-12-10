import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  getateblog() {
    return this.http.get(`${environment.baseUrl}/users/blog/get`);
  }
  deleteblog(id: any) {
    return this.http.delete(`${environment.baseUrl}/users/blog/delete/${id}`)
  }
  addBlog(blog: any) {
    return this.http.post(`${environment.baseUrl}/users/blog/add`, blog)
  }
  updateBlog(blog: any, id: any) {
    return this.http.put(`${environment.baseUrl}/users/blog/update/${id}`, blog)
  }
  getOneBlog(id:any){
    return this.http.get(`${environment.baseUrl}/users/blog/getone/${id}`)
  }
}
