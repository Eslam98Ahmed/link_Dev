import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Banner } from 'src/app/interfaces/banner';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.sass']
})
export class NewsItemComponent implements OnInit {
  
  item:any;
  id: number = 0;

  constructor(private route: ActivatedRoute , private _NewsService:NewsService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getNewsItemData(this.id);

  }
  getNewsItemData(id:number){
    this._NewsService.getNewsItem(id).subscribe((res)=>{
      this.item = res;
    })
  }

}
