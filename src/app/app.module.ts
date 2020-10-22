import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { PhoneVerificationComponent } from './auth/phone-verification/phone-verification.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OtpVerificationComponent } from './auth/otp-verification/otp-verification.component';


const appRoutes: Routes = [
  { path: '', component: PhoneVerificationComponent },
  { path: 'otp-verification', component: OtpVerificationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PhoneVerificationComponent,
    OtpVerificationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
