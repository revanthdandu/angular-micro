import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReComponentsRoutingModule } from './re-components-routing.module';
import { ReComponentsComponent } from './re-components.component';


@NgModule({
  declarations: [
    ReComponentsComponent
  ],
  imports: [
    CommonModule,
    ReComponentsRoutingModule
  ]
})
export class ReComponentsModule { }
