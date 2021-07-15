import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeShareUiComponent } from './like-share-ui/like-share-ui.component';



@NgModule({
  declarations: [
    LikeShareUiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LikeShareUiComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule { }
