import { Category } from './../../enumeration/category-types';
import { CommonService } from 'src/app/util/common.service';
import { PublicService } from 'src/app/service/public.service';
import { News } from './../../model/news';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  news : News[] = []

  pageCurrent: number = 1
  numberPages: number = 1
  positionSelected: number = 1

  category = Category

  constructor(private pbService : PublicService, public common : CommonService , private router: ActivatedRoute){
    this.router.queryParams.subscribe((param) => {
      if (param['page'] !== undefined) {
        this.positionSelected = param['page']
      } else {
        this.positionSelected = 1
      }
    })
  }

  ngOnInit(): void {
    this.pbService.findAllNews(this.positionSelected)
    .subscribe(rp =>{
      const data = rp.data
        if (data != null || data != undefined) {
          if (data.data != null || data.data != undefined) {
            this.news = data.data
            this.pageCurrent = data.total_page
          }
        }
    })
  }

  previousPage() {
    this.pageCurrent = this.pageCurrent - 3
  }
  nextPage() {
    this.pageCurrent = this.pageCurrent + 3
  }
  findByCategory(value : number) {
    
  }
}
