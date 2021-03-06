import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../constants/baseURL';
import { catchError } from 'rxjs/operators';
import { ProcessHttpMessageService } from '../services/process-http-message.service';
import { Category } from '../classes/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,
    private processHTTPMessageService: ProcessHttpMessageService) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(baseURL + 'categories')
      .pipe(catchError(this.processHTTPMessageService.handleError))
  }
}
