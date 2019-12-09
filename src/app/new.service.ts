import { Injectable } from '@angular/core';
import { New } from './new';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  private news = 'http://5dd23abb15bbc2001448d7af.mockapi.io/prj/api/news';
  constructor(
    private http: HttpClient
  ) { }
}
