import { Collections } from './../../model/collections';
import { PublicService } from './../../service/public.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent {

  collections : Collections[] =[]
  pageCurrent : number = 1
  numberPages : number = 1
  positionSelected : number = 1

  constructor(private pbService: PublicService, private router : ActivatedRoute){

    this.router.queryParams.subscribe((param) =>{
      if (param['page'] !== undefined  ){
        this.positionSelected = param['page']
      }else{
        this.positionSelected = 1
      }
   })

  }
  ngOnInit(): void {
    this.pbService.findAllCollections(this.positionSelected)
    .subscribe(rp =>{
      const data = rp.data
      if (data != null || data != undefined){
        if (data.data != null || data.data != undefined){
          this.collections = data.data
          this.pageCurrent = data.total_page
        }
      }
    })
  }
  previousPage(){
    this.pageCurrent = this.pageCurrent - 3
  }
  nextPage(){
    this.pageCurrent = this.pageCurrent + 3
  }
  actionLike(id : string,index : number){
    this.pbService.actionLike(id)
    .subscribe(rp =>{
      if (rp.data != null || rp.data != undefined){
        this.collections[index] =rp.data
      }
    })
  }
  actionFavorite(id : string,index : number){
    this.pbService.actionFavorite(id)
    .subscribe(rp =>{
      if (rp.data != null || rp.data != undefined){
        this.collections[index] =rp.data
      }
    })
  }
  
}
