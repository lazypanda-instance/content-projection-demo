import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'content-projection-demo';
  public show: boolean = true;

  public widgetDataSource: Array<any> = [
    {
      id: 1,
      type: 'text',
      value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      visible: true,
      likes: 10,
      share: 5
    },
    {
      id: 2,
      type: 'image',
      value: 'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
      visible: true,
      likes: 30,
      share: 15
    },
    {
      id: 3,
      type: 'text',
      value: "Sample Text goes here",
      visible: true,
      likes: 1,
      share: 0
    },
    {
      id: 4,
      type: 'image',
      value: "https://lazypandatech.com/assets/4.png",
      visible: true,
      likes: 100,
      share: 50
    },
  ];
}
