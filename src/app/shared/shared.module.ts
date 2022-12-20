import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import {MatMenuModule} from '@angular/material/menu';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    TitleBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    SwiperModule
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    SwiperModule
  ]
})
export class SharedModule { }
