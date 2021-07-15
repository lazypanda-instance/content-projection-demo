import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.scss']
})
export class WidgetContainerComponent implements OnInit {

  @Input() widget!: any;
  @Input() show: boolean = false;
  @ContentChild(TemplateRef) public contentTemplateRef!: TemplateRef<any>;

  public label: string = 'ᐱ';

  constructor() { }

  ngOnInit(): void {
  }

  toggoleWidgetDetails() {
    this.widget.visible = !this.widget.visible;
    this.label = this.widget.visible ? 'ᐱ' : 'ᐯ';
  }

}
