import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../shared/user/auth.service';
import { UserdataService } from '../shared/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userdata : UserdataService, private router :Router, private userauth: AuthService, private spinner : NgxSpinnerService) { }

  // loginForm = new FormGroup({
  //   'username' : new FormControl('')
  // })

  loginForm = new FormGroup({
    'email' : new FormControl(''),
    'password' : new FormControl('')
  })

  ngOnInit(): void {
    if(this.userdata.getData() != null)
    {
      this.router.navigateByUrl('layout/dashboard')
    }
  }

  onclick(){
    this.spinner.show()
    this.userauth.login(this.loginForm.value).subscribe(
      (res:any)=>{
        this.spinner.hide()
        // console.log(res.response.token)
        this.userdata.setData(res.response.token)
        this.router.navigateByUrl('layout/dashboard')
      },
      err =>{
        this.spinner.hide()
        console.log(err)
      }

    )

    // console.log(this.loginForm.value)
    // console.log(this.loginForm.get('username').value)

    // if(this.loginForm.get('username').value == "daman")
    // {
    //   this.userdata.setData(this.loginForm.value)
    //   this.router.navigateByUrl('layout/dashboard')
    // }
    // else{
    //   alert('Incorrect username')
    // }
  }

}
