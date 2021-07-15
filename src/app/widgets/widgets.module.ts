import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageWidgetComponent } from './image-widget/image-widget.component';
import { TextWidgetComponent } from './text-widget/text-widget.component';

@NgModule({
  declarations: [
    ImageWidgetComponent,
    TextWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageWidgetComponent,
    TextWidgetComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class WidgetsModule { }
