import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {PostComment} from "../app/model/PostComment";

@Injectable({
  providedIn: 'root'
})
export class PostCommentService {

  constructor(private http: HttpClient) {

  }

  postComment(postComment: PostComment) :Observable<PostComment>{
    return this.http.post<PostComment>("http://localhost:8080/comments/postComment",postComment);
  }


}
