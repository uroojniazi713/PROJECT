import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }
  getproject() {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.set('Access-Control-Allow-Headers', '*');
    headers.set('Accept', '*/*');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');

    return this.http
      .get('http://localhost:3000/posts', { observe: 'response', headers })
      .pipe((res: any) => res);
  }

  insertproject(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Access-Control-Allow-Headers', '*');
    return this.http
      .post('http://localhost:3000/posts', data, { observe: 'response' })
      .pipe((res: any) => res);
  }
  
  deleteproject(id: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Access-Control-Allow-Headers', '*');
    return this.http
      .delete('http://localhost:3000/posts/' + id, { observe: 'response' })
      .pipe((res: any) => res);
  }

  updateproject(rowId: any, obj: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Access-Control-Allow-Headers', '*');
    return this.http
      .put('http://localhost:3000/posts/' + rowId, obj, { observe: 'response' })
      .pipe((res: any) => res);
  }

  getCurrentData(id: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Access-Control-Allow-Headers', '*');
    return this.http
      .get('http://localhost:3000/posts/' + id, { observe: 'response' })
      .pipe((res: any) => res);
  }
  
}
