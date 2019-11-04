import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgDragDropModule } from 'ng-drag-drop';
import { NgSelectModule } from '@ng-select/ng-select';
import {NgxPopperModule} from 'ngx-popper';
import {WebcamModule} from 'ngx-webcam';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

//  import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface  } from 'ngx-perfect-scrollbar';
import { AppRoutingModule } from './app-routing.module';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';
import { CommonResuablesComponent } from './common-resuables/common-resuables.component';
import { CameraComponent } from './camera/camera.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftpanelComponent,
    CommonResuablesComponent,
    CameraComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgDragDropModule.forRoot(),
    NgSelectModule,
    NgxPopperModule.forRoot({placement: 'bottom'}),
    // BsDatepickerModule.forRoot(),
    // DatepickerModule.forRoot() ,

    NgxLoadingModule.forRoot({
          animationType: ngxLoadingAnimationTypes.circleSwish,
          backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
          backdropBorderRadius: '4px',
          fullScreenBackdrop: true,
          primaryColour: '#ff0000', 
          secondaryColour: '#ffffff', 
          tertiaryColour: '#ffffff'
    }),
    PerfectScrollbarModule,
    WebcamModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot() ,
    AppRoutingModule

    
  ],
  providers: [{provide: OWL_DATE_TIME_LOCALE, useValue: 'en'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
