import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Images } from './images';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private _url: string = 'http://localhost:4546/images';
  constructor(private http: HttpClient) {}
  getImages(): Observable<Images[]> {
    return this.http.get<Images[]>(this._url);
  }
}
