import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardComment } from '../model/card-comment.model';
import { CardList } from '../model/card-list.model';
import { Card } from '../model/card.model';

const baseURL = 'http://localhost:3000/api/cards';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private httpClient: HttpClient) {}

  getAll(params?: any): Observable<CardList> {
    let queryParams = {};

    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('page', params.page || '')
          .set('pageSize', params.pageSize || ''),
      };
    }

    return this.httpClient.get(baseURL, queryParams).pipe(
      map((data: any) => {
        return new CardList(data);
      })
    );
  }

  updateOne(card: Card): Observable<Card> {
    return this.httpClient.put(`${baseURL}/${card._id}`, card).pipe(
      map((data: any) => {
        return new Card(data);
      })
    );
  }

  getComments(cardId: number): Observable<CardComment[]> {
    return this.httpClient.get(`${baseURL}/${cardId}/comments`).pipe(
      map((data: any) => {
        return (data && data.results.map((x: any) => new CardComment(x))) || [];
      })
    );
  }

  postComment(comment: CardComment): Observable<CardComment> {
    return this.httpClient
      .post(`${baseURL}/${comment.cards}/comments`, comment)
      .pipe(
        map((data: any) => {
          return new CardComment(data);
        })
      );
  }
}
