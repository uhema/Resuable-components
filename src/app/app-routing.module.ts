import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';
import { CommonResuablesComponent } from './common-resuables/common-resuables.component';
import { CameraComponent } from './camera/camera.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/common-resuables', pathMatch: 'full'
  },
  { path: 'common-resuables', component: CommonResuablesComponent },
  { path: 'camera', component: CameraComponent },
  { path: 'leftpanel', component: LeftpanelComponent  },
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
