import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-share-ui',
  templateUrl: './like-share-ui.component.html',
  styleUrls: ['./like-share-ui.component.scss']
})
export class LikeShareUiComponent implements OnInit, OnDestroy {
  @Input() likesData!: string;
  @Input() shareData!: string;

  constructor() { }

  ngOnInit(): void {
    console.log('Like Component initialized');
  }

  ngOnDestroy(): void {
    console.log('Like Component destroyed');
  }

}
