import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Service/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
// const jwt  = require("") ;
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model: any = {};
  response: any;
  constructor(
    private _apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  signin() {
    console.log('login.component.ts: sign() called');
    this._apiService.login(this.model).subscribe({
      next: (data) => {
        console.log('Successfull', data);
        this.response = data;
        console.log('Response: ', this.response.message);
        //check the response message
        if (this.response.message === 'authenticated') {
          // console.log("login.component.ts: data: ", data);
          this.toastr.success('Success');
          // console.log(data.user_type) ;
          // localStorage.setItem('user_type', data['user_type']);
          localStorage.setItem('token', data['token']);
          // this.router.navigate(['/books']);
          let decodedTOken: any = jwt_decode(data.token);

          localStorage.setItem('user_type', decodedTOken.role);
          console.log('Here Is the Need Thing : ', decodedTOken);
        }
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error in login.component.ts');
      },
    });
  }
}
