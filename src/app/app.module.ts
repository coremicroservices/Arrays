import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UniqueItemsFromArrayComponent } from './unique-items-from-array/unique-items-from-array.component';

@NgModule({
  declarations: [
    AppComponent,
    UniqueItemsFromArrayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
