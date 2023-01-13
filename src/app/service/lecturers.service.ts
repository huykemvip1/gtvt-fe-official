import { Users } from './../model/users';
import { Observable } from 'rxjs';
import { Result } from './../model/result';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { evironment } from 'src/assets/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class LecturersService {

  private apiFindAll = evironment.apiUrl.concat('lecturers')

  constructor(private http: HttpClient) { }

  findAll() : Observable<Result<Users[]>> {
    return this.http.get<Result<Users[]>>(this.apiFindAll)
  }
}
