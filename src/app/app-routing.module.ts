import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';
import { CommonResuablesComponent } from './common-resuables/common-resuables.component';


const routes: Routes = [
  { path: 'leftpanel', component: LeftpanelComponent  },
  { path: 'common-resuables', component: CommonResuablesComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
