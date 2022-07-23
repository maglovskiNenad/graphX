import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardComment } from '../model/card-comment.model';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  cardId: number = 0;
  comments: CardComment[] = []

  newComment: CardComment = new CardComment();

  constructor(private route: ActivatedRoute, private service: CardsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.cardId = params['id'];
      this.getComments();
    })

  }

  getComments(): void {
    this.service.getComments(this.cardId).subscribe((comments: CardComment[]) => {
      this.comments = comments;
    })
  }

  postComment(): void {
    this.newComment.date = new Date().toISOString(); 
    this.newComment.cards = this.cardId;
    this.service.postComment(this.newComment).subscribe((comment: CardComment) => {
      this.comments.unshift(comment);
      this.newComment = new CardComment();
    })
  }

}
