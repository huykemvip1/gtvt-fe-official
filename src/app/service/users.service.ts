import { Observable } from 'rxjs';
import { Users } from './../model/users';
import { Result } from './../model/result';
import { HttpClient } from '@angular/common/http';
import { evironment } from './../../assets/environment.dev';
import { Injectable } from '@angular/core';
import { PageResult } from '../model/page-result';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  private apiFindBy = evironment.apiUrl.concat('users/')
  private apiGetByCoursesId = evironment.apiUrl.concat('users/').concat('getByCoursesId')
  constructor(private http : HttpClient) { }

  findById(id: any) : Observable<Result<Users>>{
    return this.http.get<Result<Users>>(this.apiFindBy.concat(id))
  }
 
  findByUsername(username: string ) {
    
  }
  findUsersByByCourse(id: number, pageCurrent : number): Observable<Result<PageResult<Course>>> {
   
    
    return this.http.get<Result<PageResult<Course>>>(this.apiGetByCoursesId,{
      params: {idCourse : id,page : pageCurrent , pageSize : evironment.pageSizeDefault}
    })
  }
}
