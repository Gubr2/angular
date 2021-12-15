import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uploaders } from './uploaders';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadersService {
  private _url: string = 'http://localhost:4546/uploaders';
  constructor(private http: HttpClient) {}
  getUploaders(): Observable<Uploaders[]> {
    return this.http.get<Uploaders[]>(this._url);
  }
}
