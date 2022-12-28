import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpResponse } from 'src/app/models/http-response';
import { environment } from 'src/environments/environment';
import { LoginData } from '../models/login-data';
// import { Store } from 'electron-store';
// const Store = require("electron-store");

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authAPIUrl: string = environment.authAPIUrl;

  constructor(
    private http: HttpClient,
  ) {}

  public login(body: any){
    console.log(this.authAPIUrl);
    
    let promise: Promise<HttpResponse<LoginData>>;
    return promise = new Promise<HttpResponse<LoginData>>((resolve, reject) => {
      this.http.post<HttpResponse<LoginData>>(`${this.authAPIUrl}/login`, body).subscribe({
        next: response => {
          console.log(response);
          resolve(response);
        },
        error: error => {
          console.log(error);
          reject(error);
        }
      })
    })
  }
}
