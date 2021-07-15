import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-widget',
  templateUrl: './text-widget.component.html',
  styleUrls: ['./text-widget.component.scss']
})
export class TextWidgetComponent implements OnInit, OnDestroy {

  @Input() public textToShow!: string;

  constructor() { }

  ngOnInit(): void {
    console.log('Text Component initialized');
  }

  ngOnDestroy(): void {
    console.log('Text Component destroyed');
  }

}
