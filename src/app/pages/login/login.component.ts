import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule, HttpClientModule],
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginObj: any = {
    userName: '',
    password: '',
  };

  http = inject(HttpClient);
  router = inject(Router);

  constructor() {}

  ngOnInit() {}

  onLogin() {
    this.http
      .post('https://projectapi.gerasim.in/api/BankLoan/login', this.loginObj)
      .subscribe(
        (res: any) => {
          if (res.data.role == 'Customer') {
            this.router.navigateByUrl('my-application');
          } else {
            this.router.navigateByUrl('loan-application');
          }
          localStorage.setItem('userApp', JSON.stringify(res.data));
        },
        (err) => {
          if (err.status == 401) alert(err.error);
        }
      );
  }
}
