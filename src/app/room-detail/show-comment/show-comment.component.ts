import {Component, OnInit} from '@angular/core';
import {ShowComment} from "../../model/Comment";
import {ShowCommentService} from "../../../service/showComment";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-comment',
  templateUrl: './show-comment.component.html',
  styleUrls: ['./show-comment.component.css']
})
export class ShowCommentComponent implements OnInit{

  showComments!: ShowComment[];
  id!: any;
  constructor(private showCommentService:ShowCommentService,private route: ActivatedRoute) {
  }

  // ngOnInit(): void {
  //   this.showCommentService.getShowComment().subscribe(data=>{
  //     this.showComments = data;
  //   });
  // }



  ngOnInit(): void {


    this.getShowComment(this.id)
    this.id = this.route.snapshot.paramMap.get('idRoom')
    this.showCommentService.getShowComment(this.id).subscribe(data => {
      this.showComments = data

    })

  }

  // @ts-ignore
  getShowComment(id: string | null){
    this.showCommentService.getShowComment(this.id).subscribe((data) => {
      this.showComments = data;
    })
  }

}
