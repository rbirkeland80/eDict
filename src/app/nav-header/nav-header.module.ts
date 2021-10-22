import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { NavHeaderComponent } from './nav-header.component';

@NgModule({
  declarations: [
    NavHeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    NavHeaderComponent
  ]
})
export class NavHeaderModule { }
