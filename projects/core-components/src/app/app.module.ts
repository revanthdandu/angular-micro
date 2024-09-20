import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgnioDropdownComponent } from './ignio-dropdown/ignio-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    IgnioDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [IgnioDropdownComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
