import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MarkForCheckComponent } from './mark-for-check/mark-for-check.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // RouterModule.forRoot([{ path: '', component: MarkForCheckComponent }]),
  ],
  declarations: [AppComponent, MarkForCheckComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
