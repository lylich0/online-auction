import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuctionLotCardComponent } from './components/auction-lot-card/auction-lot-card.component';
import { NgOptimizedImage } from "@angular/common";
import { HeaderComponent } from './components/header/header.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";

import { environment } from "../environments/environment.development";
import { AngularFireModule } from "@angular/fire/compat";


@NgModule({
  declarations: [
    AppComponent,
    AuctionLotCardComponent,
    HeaderComponent,
    LoginModalComponent
  ],
    imports: [
        BrowserModule,
        NgOptimizedImage,
        AppRoutingModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
