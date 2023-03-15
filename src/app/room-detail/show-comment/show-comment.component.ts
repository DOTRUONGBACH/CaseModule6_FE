import {Component, OnInit} from '@angular/core';
import {TopRent} from "../../model/TopRent";
import {TopRentService} from "../../../service/TopRentService";
import {ShowComment} from "../../model/Comment";
import {ShowCommentService} from "../../../service/showComment";

@Component({
  selector: 'app-show-comment',
  templateUrl: './show-comment.component.html',
  styleUrls: ['./show-comment.component.css']
})
export class ShowCommentComponent implements OnInit{

  showComments: ShowComment[] = [];
  constructor(private showCommentService:ShowCommentService) {
  }

  ngOnInit(): void {
    this.showCommentService.getShowComment().subscribe(data=>{
      this.showComments = data;
    });
  }


}
