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
  slidersInit:Banner[] = [];
  currentIndex: number = 0;
  isMenuOpen = false;
  activeSlide: number = 0;
  activeColor:string ='';

  constructor(private _BannerService:BannerService) { }

  ngOnInit(): void {
   this.getBannerData();
  }

  getBannerData(){
    this._BannerService.getBannerData().subscribe((res:any)=>{
      this.slides = res.slides
      this.slides[0].imgUrl='assets/img/person1.png';
      this.slides[1].imgUrl='assets/img/person3.png';
      this.slides[2].imgUrl='assets/img/person2.png';
      this.activeColor =`#${res.slides[0].colorCode}`;
      console.log(this.slides);
    })
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectSlide(index: number , selectSlide:Banner) {
    this.activeSlide = index;
    this.activeColor =`#${selectSlide.colorCode}`
  }

  RedirectUrl(slide:Banner){
    window.open(slide.itemUrl, '_blank');
  }

  RedirectVideoUrl(slide:Banner){
    window.open(slide.videoUrl, '_blank');
  }

  activeColorSlide(slide:Banner){
    return `#${slide.colorCode}`;
  }

}
