import {Component, OnInit} from '@angular/core';
import {ShowComment} from "../../model/Comment";
import {ShowCommentService} from "../../../service/showComment";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {AccountP} from "../../model/AccountP";
import {Room} from "../../model/Room";
import {AccountService} from "../../service/account/account.service";
import {PostCommentService} from "../../../service/postComment";
import {FormControl, FormGroup} from "@angular/forms";
import {PostComment} from "../../model/PostComment";

@Component({
  selector: 'app-show-comment',
  templateUrl: './show-comment.component.html',
  styleUrls: ['./show-comment.component.css']
})
export class ShowCommentComponent implements OnInit{

  showComments!: ShowComment[];
  id!: any;
  formPost!:any;
  account!:AccountP;
  room!:Room;

  value!:string;
  constructor(private accountService:AccountService,private route: ActivatedRoute,private postCommentService:PostCommentService,private showCommentService:ShowCommentService) {
  }

  ngOnInit(): void {
    this.accountService.findRoomById(this.route.snapshot.params['idRoom']).subscribe(res=> this.room=res)
    this.accountService.findByIdP(this.accountService.getAccountToken().id).subscribe(res=>this.account=res)
    this.formPost= new FormGroup({
      content: new FormControl('')

    })

    this.id = this.route.snapshot.paramMap.get('idRoom')
    this.showCommentService.getShowComment(this.id).subscribe(data => {
      this.showComments = data

    })

  }
  postComment(){

    const postComment:PostComment= new PostComment(this.formPost.value.content,
      1,this.accountService.getAccountToken(),
      this.room,true)
    console.log(postComment)
    this.postCommentService.postComment(postComment).subscribe(() => {
      this.showCommentService.getShowComment(this.id).subscribe((data) => {
        this.showComments = data;
      });
    });

this.value=""
  }


}
