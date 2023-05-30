import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API = "api/usuario/login"

  constructor(private httpClient: HttpClient) { }

  logar(email:string, senha:string) {
    return this.httpClient.post(this.API, {email, senha});
  }

}
