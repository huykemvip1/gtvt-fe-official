import { CommonService } from 'src/app/util/common.service';
import { News } from './../../model/news';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicService } from 'src/app/service/public.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent {
  id : string 
  news : News = {}
  constructor(private pbService : PublicService, private router : Router, public common : CommonService){
    const id = router.url.split('/')[3]
    this.id = id
    pbService.findNewsById(id)
    .subscribe(rp =>{
      if (rp.data != null && rp.data != undefined){
        this.news = rp.data
      }
    })
  }


}
