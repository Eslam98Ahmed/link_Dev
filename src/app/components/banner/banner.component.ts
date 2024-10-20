import { Banner } from './../../interfaces/banner';
import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {
  slides:Banner[] = [];

  constructor(private _BannerService:BannerService) { }

  ngOnInit(): void {
   this.getBannerData();
  }

  getBannerData(){
    this._BannerService.getBannerData().subscribe((res:any)=>{
      this.slides = res.slides
      console.log(this.slides);
    })
  }

}
