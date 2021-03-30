import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  public setData(userdata)
  {
      sessionStorage.setItem('token',userdata)
  }

  public getData() {
    return sessionStorage.getItem('token')
  }

  public removeData()
  {
    sessionStorage.removeItem('token')
  }
}
