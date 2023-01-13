import { FormControl } from '@angular/forms';
import { Documents } from './../model/document';
import { ActivatedRoute } from '@angular/router';
import { PublicService } from 'src/app/service/public.service';
import { Component, SimpleChanges } from '@angular/core';
import { SubjectProgram } from '../model/subject-program';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {

  idForm = new FormControl('')
  nameForm = new FormControl('')

  documents: Documents[] = []

  subjectPrograms: SubjectProgram[] = []

  pageCurrent: number = 1
  numberPages: number = 1
  positionSelected: number = 1

  constructor(private pbService: PublicService, private router: ActivatedRoute) {
    this.router.queryParams.subscribe((param) => {
      if (param['page'] !== undefined) {
        this.positionSelected = param['page']
      } else {
        this.positionSelected = 1
      }
    })
  }

  ngOnInit(): void {


    this.pbService.findAllSubjectPrograms()
      .subscribe(rp => {
        if (rp.data != undefined && rp.data != null) {
          console.log(rp.data);

          this.subjectPrograms = rp.data
        }
      })

   
    this.pbService.findAllDocuments(this.positionSelected)
      .subscribe(rp => {
        const data = rp.data
        if (data != null || data != undefined) {
          if (data.data != null || data.data != undefined) {
            this.documents = data.data
            this.pageCurrent = data.total_page
          }
        }
      })

  }

  changeSearch(){
    if (this.idForm.value != null && this.idForm.value != ''
         && this.nameForm.value != null && this.nameForm.value != '') {
        this.pbService.findByDocumentsCondition(this.idForm.value, this.nameForm.value)
        .subscribe(rp =>{
          if (rp.data != null ){
            this.documents = rp.data
          }
        })
      }
      else{
        this.pbService.findAllDocuments(this.positionSelected)
      .subscribe(rp => {
        const data = rp.data
        if (data != null || data != undefined) {
          if (data.data != null || data.data != undefined) {
            this.documents = data.data
            this.pageCurrent = data.total_page
          }
        }
      })
      }
  }


  previousPage() {
    this.pageCurrent = this.pageCurrent - 3
  }
  nextPage() {
    this.pageCurrent = this.pageCurrent + 3
  }
  actionLike(id: string, index: number) {
    this.pbService.actionDocumentsLike(id)
      .subscribe(rp => {
        if (rp.data != null || rp.data != undefined) {
          this.documents[index].like_number = rp.data
        }
      })
  }
  actionFavorite(id: string, index: number) {
    this.pbService.actionDocumentsFavorite(id)
      .subscribe(rp => {
        if (rp.data != null || rp.data != undefined) {
          this.documents[index].favorite_number = rp.data
        }
      })
  }



}
