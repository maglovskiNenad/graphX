import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent implements OnInit {

  @Input()
  text: string = "";

  @Input()
  textLength: number = 130;

  isShowMore: boolean = false;
  showText: string = "";

  constructor() { }

  ngOnInit(): void {
    this.toggleShow()
  }

  toggleShow() {
    this.isShowMore = !this.isShowMore;
    if(!this.isShowMore || this.textLength > this.text.length) {
      this.showText = this.text;
    } else {
      this.showText = this.text.substr(0, this.textLength) + "..."
    }
  }

}
