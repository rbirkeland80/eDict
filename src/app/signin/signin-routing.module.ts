import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './signin.component';

const routes = [
  { path: '', component: SigninComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SigninRoutingModule {}

