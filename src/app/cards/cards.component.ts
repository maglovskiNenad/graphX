import { Component, OnInit } from '@angular/core';
import { CardList } from '../model/card-list.model';
import { Card } from '../model/card.model';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: CardList = new CardList();

  queryParams = {
    page: 1,
    pageSize: 5
  }

  constructor(private service: CardsService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.service.getAll(this.queryParams).subscribe((data: any) => {
      this.cards = data;
    })
  }

  onPageChange(newPage: number) {
    this.queryParams.page = newPage;
    this.getCards();
  }

  updateCard(card: Card) {
    this.service.updateOne(card).subscribe((updatedCard: Card) => {
      for (let card of this.cards.results) {
        if (card._id == updatedCard._id) {
          card = updatedCard;
        }
      }
    })
  }

}
