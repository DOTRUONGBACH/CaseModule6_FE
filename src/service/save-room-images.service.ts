import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SaveRoomImagesService {


  private baseUrl = 'http://localhost:8080/post/upload/';

  constructor(private http: HttpClient) { }

  saveImg(formData: FormData,id: number ): Observable<any> {

    const headers = new HttpHeaders();

    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post<any>(this.baseUrl + id, formData,{headers});

}}
