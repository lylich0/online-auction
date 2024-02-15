import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionLotCardComponent} from "./components/auction-lot-card/auction-lot-card.component";
import { LoginModalComponent } from "./components/login-modal/login-modal.component";
import {HeaderComponent} from "./components/header/header.component";

const routes: Routes = [
  { path: 'login', component: LoginModalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
