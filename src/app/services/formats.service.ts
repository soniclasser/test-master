import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Format } from '../share/Format';


@Injectable({
  providedIn: 'root'
})
export class FormatsService {

  constructor(private http: HttpClient) {

  }

  public getJSON(): Observable<any> {
      return this.http.get<Format[]>("./assets/formats.json");
  }
}
