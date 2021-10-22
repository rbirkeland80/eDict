import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DictionariesComponent } from './dictionaries.component';

const routes = [
  { path: 'dictionaries', component: DictionariesComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DictionariesRoutingModule {}

