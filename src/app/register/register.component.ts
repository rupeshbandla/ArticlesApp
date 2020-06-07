import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service'
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: any;
  password: any;
  email: any;
  address: any;
  constructor(public router: Router, public httpService: ArticleService) {

  }

  ngOnInit() {

  }


  register() {
    let body = {
      "username": this.username,
      "email": this.email,
      "password": this.password,
      "address": this.address,
    }
    this.httpService.signup(body).subscribe(data => {
      alert('New User Created')
      this.router.navigate(['/login'])
    })
  }

}
