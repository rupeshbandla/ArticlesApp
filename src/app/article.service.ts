import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  api = "http://localhost:3000/";
  constructor(public httpClient: HttpClient) { }

  signup(body) {
    return this.httpClient.post(this.api + 'user/register', body);
  }

  login(body) {
    console.log(body);
    return this.httpClient.post(this.api + 'user/login', body);
  }

  createArticle(body) {
    console.log(JSON.parse(localStorage.getItem("token")));

    let httpHeaders = new HttpHeaders({ 'Authorization': 'Bearer' + ' ' + JSON.parse(localStorage.getItem("token")) })
    return this.httpClient.post(this.api + 'articles', body, { headers: httpHeaders });
  }

  getAllArticles() {
    return this.httpClient.get(this.api + 'articles');
  }
}
