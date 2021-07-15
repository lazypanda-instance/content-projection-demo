import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetsModule } from './widgets/widgets.module';
import { WidgetContainerComponent } from './widget-container/widget-container.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    WidgetContainerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    WidgetsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
