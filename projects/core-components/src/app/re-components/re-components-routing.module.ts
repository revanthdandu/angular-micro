import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReComponentsComponent } from './re-components.component';

const routes: Routes = [{ path: '', component: ReComponentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReComponentsRoutingModule { }
