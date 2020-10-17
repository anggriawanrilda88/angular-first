import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { PhoneVerificationComponent } from './auth/phone-verification/phone-verification.component';

const appRoutes: Routes = [
  { path: '', component: PhoneVerificationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PhoneVerificationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
