import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ShowComment} from "../app/model/Comment";


@Injectable({
  providedIn: 'root'
})
export class ShowCommentService {

  constructor(private http: HttpClient) {

  }


  getShowComment() :Observable<ShowComment[]>{
    return this.http.get<ShowComment[]>("http://localhost:8080/comments/showComment");
  }


}
