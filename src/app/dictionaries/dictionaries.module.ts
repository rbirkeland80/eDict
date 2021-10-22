import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DictionariesRoutingModule } from './dictionaries-routing.module';
import { DictionariesComponent } from './dictionaries.component';

@NgModule({
  declarations: [
    DictionariesComponent
  ],
  imports: [
    CommonModule,
    DictionariesRoutingModule
  ]
})
export class DictionariesModule { }
