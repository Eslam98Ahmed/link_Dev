import { NewsItem } from './../../interfaces/news-item';
import { NewsCategories } from './../../interfaces/news-categories';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.sass']
})
export class NewsListComponent implements OnInit {
  
  newsCategories:NewsCategories[]=[];
  newsItems:NewsItem[]=[];
  MainNewsItems:NewsItem[]=[];
  showAllNews:boolean = true;
  fiterBtn:boolean = true;
  categoryFilterId:number = 0;

  constructor(private _NewsService:NewsService , private router: Router) { }

  ngOnInit(): void {
    this.getNewsCategories();
    this.getAllNews();
  }

  getNewsCategories(){
    this._NewsService.getNewsCategories().subscribe((res)=>{
      this.newsCategories = res.newsCategory;
    })
  }

  getAllNews(){
    this._NewsService.getNewsList().subscribe((res)=>{
      this.newsItems = res.News;
      this.MainNewsItems =  res.News;
      this.newsItems = this.newsItems.slice(0,6)       
    })
  }

  filterByCategory(categoryId:any){
    var newsFilterArray =[];
    newsFilterArray= this.MainNewsItems.filter(item => item.categoryID == categoryId);
    this.newsItems = newsFilterArray;
    this.fiterBtn = false;
    this.categoryFilterId = Number(categoryId);
  }

  filterByAllCategory(){
    this.newsItems = this.MainNewsItems.slice(0,6)
    this.fiterBtn = true;
    this.categoryFilterId = 0;
  }

  routeToNewsItem(id:string){
    this.router.navigate(['/news', id]);
  }

  ShowAllNews(){
    this._NewsService.getNewsList().subscribe((res)=>{
      this.newsItems = res.News;
      this.showAllNews = false;
    })
  }

  ShowLessNews(){
    this.getAllNews();
    this.showAllNews = true;
  }

}
