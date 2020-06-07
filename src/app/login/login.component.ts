import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(formBuild: FormBuilder, public httpService: ArticleService,public router:Router) {
    this.loginForm = formBuild.group({
      email: new FormControl("", Validators.compose([Validators.required, Validators.email])),
      password: new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }
  login() {
    this.httpService.login(this.loginForm.value).subscribe(data =>{
      localStorage.setItem('token',JSON.stringify(data['accessToken']))
      alert('User Login Successfull')
      this.router.navigate(['/articles'])
    })
  }
}
