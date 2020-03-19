import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Style } from '../share/Style';


@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor(private http: HttpClient) {

  }

  public getJSON(): Observable<any> {
      return this.http.get<Style>("./assets/window.json");
  }
}
