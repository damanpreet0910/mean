import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  BaseUrl = ''
  Token = ''
  constructor(private http : HttpClient,@Inject('BaseUrl') _baseurl, private userdata : UserdataService) {
    this.BaseUrl = _baseurl
    this.Token = this.userdata.getData()
   }

   public register(form){

    var header_object = new HttpHeaders().set('Authorization','Bearer '+this.Token)
    return this.http.post(this.BaseUrl+"/register",form,{headers:header_object})
    // return this.http.post(this.BaseUrl+"/register",form)

   }

   public getstudent(){
    var header_object = new HttpHeaders().set('Authorization','Bearer '+this.Token)
    return this.http.get(this.BaseUrl+"/getStudent",{headers:header_object})
   }


}
