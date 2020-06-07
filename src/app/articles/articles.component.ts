import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articlesForm: FormGroup;
  articlesArray: any;

  constructor(formBuild: FormBuilder, public service: ArticleService) {
    this.articlesForm = formBuild.group({
      title: new FormControl("", Validators.required),
      author: new FormControl("", Validators.required),
      body: new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  create_post(value) {
    this.service.createArticle(value).subscribe(data => {
      alert('Article Created')
    })
  }

  getAllArticles() {
    this.service.getAllArticles().subscribe(data => {
      this.articlesArray = data
    })
  }

}
