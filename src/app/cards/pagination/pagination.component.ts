import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  page: number = 1;

  @Input()
  pageSize: number = 10;

  @Input()
  collectionSize: number = 0;

  @Output()
  pageChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(newPage: number) {
    this.pageChange.emit(newPage);
  }

}
