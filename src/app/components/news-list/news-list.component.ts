import { NewsItem } from './../../interfaces/news-item';
import { NewsCategories } from './../../interfaces/news-categories';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.sass']
})
export class NewsListComponent implements OnInit {

  newsCategories:NewsCategories[]=[];
  newsItems:NewsItem[]=[];

  constructor(private _NewsService:NewsService) { }

  ngOnInit(): void {
    this.getNewsCategories();
    this.getAllNews();
  }

  getNewsCategories(){
    this._NewsService.getNewsCategories().subscribe((res)=>{
      this.newsCategories = res.newsCategory
      console.log(this.newsCategories ,"categories");
      
    })
  }

  getAllNews(){
    this._NewsService.getNewsList().subscribe((res)=>{
      this.newsItems = res.News 
      console.log(this.newsItems ,"News");
      
    })
  }

}
