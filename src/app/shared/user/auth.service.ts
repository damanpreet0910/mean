import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  BaseUrl : ''
  constructor(private http : HttpClient,@Inject('BaseUrl') _baseurl) {
      this.BaseUrl = _baseurl
   }

   login(form)
   {
      return this.http.post(this.BaseUrl+"/login",form)
   }

}
