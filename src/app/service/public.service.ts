import { News } from './../model/news';
import { SubjectProgram } from './../model/subject-program';
import { Documents } from './../model/document';
import { Collections } from './../model/collections';
import { PageResult } from './../model/page-result';
import { Observable } from 'rxjs';
import { Result } from './../model/result';
import { HttpClient } from '@angular/common/http';
import { evironment } from './../../assets/environment.dev';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  
  
  
  
  
  private apiFindCourses = evironment.apiUrl.concat('public', '/courses')
  private apiFindCollections = evironment.apiUrl.concat('public', '/collections')
  private apiActionLike = evironment.apiUrl.concat('public','/collections', '/actionLike')
  private apiActionFavorite = evironment.apiUrl.concat('public','/collections','/actionFavorite')
  private apiFindSubjectPrograms = evironment.apiUrl.concat('public','/subject-program')

  private apiFindDocuments = evironment.apiUrl.concat('documents')
  private apiDocumentsActionFavorite = evironment.apiUrl.concat('documents','/favorite')
  private apiDocumentsActionLike = evironment.apiUrl.concat('documents','/like')
  private apiDocumentsByCondition = evironment.apiUrl.concat('documents','/search')

  private apiFindNews = evironment.apiUrl.concat('news')
  private apiFindNewsById = evironment.apiUrl.concat('news/')

  constructor(private http: HttpClient) { }


  findAllNews(positionSelected: number) {
    return this.http.get<Result<PageResult<News[]>>>(this.apiFindNews,{
      params:{page : positionSelected , pageSize : 4}
    })
  }
  
  findNewsById(id : string) {
    return this.http.get<Result<News>>(this.apiFindNewsById.concat(id))
  }

  findByDocumentsCondition(idSubject: string , name: string) {
    return this.http.get<Result<Documents[]>>(this.apiDocumentsByCondition,{
      params: {name : name, idSubject : idSubject}
    })
  }

  findCourses(): Observable<Result<Course[]>> {
    return this.http.get<Result<Course[]>>(this.apiFindCourses);
  }

  
  findAllSubjectPrograms() {
   return this.http.get<Result<SubjectProgram[]>>(this.apiFindSubjectPrograms)
  }

  // Phần collections
  findAllCollections(page: number) {
    return this.http.get<Result<PageResult<Collections[]>>>(this.apiFindCollections, {
      params: { page: page, pageSize: evironment.pageSizeDefault }
    })
  }

  actionFavorite(id: string) {
    return this.http.get<Result<Collections>>(this.apiActionFavorite, {
      params: { id: id}
    })
  }

  actionLike(id : string) {
    return this.http.get<Result<Collections>>(this.apiActionLike, {
      params: { id: id}
    })
  }

  // Phần phân trang
  findAllDocuments(page: number) {
    return this.http.get<Result<PageResult<Documents[]>>>(this.apiFindDocuments, {
      params: { page: page, pageSize: evironment.pageSizeDefault }
    })
  }

  actionDocumentsFavorite(id: string) {
    return this.http.get<Result<number>>(this.apiDocumentsActionFavorite, {
      params: { id: id , numberFavorite : 1}
    })
  }
  actionDocumentsLike(id: string) {
    return this.http.get<Result<number>>(this.apiDocumentsActionLike, {
      params: { id: id, numberLike : 1}
    })
  }
}
