import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-widget',
  templateUrl: './image-widget.component.html',
  styleUrls: ['./image-widget.component.scss']
})
export class ImageWidgetComponent implements OnInit, OnDestroy {
  @Input() public imageSrc!: string;

  constructor() { }

  ngOnInit(): void {
    console.log('Image Component initialized');
  }

  ngOnDestroy(): void {
    console.log('Image component destroyed');
  }
}
