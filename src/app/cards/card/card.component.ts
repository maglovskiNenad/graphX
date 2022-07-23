import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/model/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  card: Card = new Card();

  @Output()
  updateGrade = new EventEmitter<Card>()

  constructor() { }

  ngOnInit(): void {
  }

  onGradeChange(newGrade: number) {
    this.card.grade = newGrade;
    this.updateGrade.emit(this.card);
  }

}
