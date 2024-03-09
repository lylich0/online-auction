import {Component, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from "../../services/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.authInitialized$.subscribe(initialized => {
      if (initialized) {
        this.authService.isLoggedIn$.subscribe(isLoggedIn => {
          this.isLoggedIn = isLoggedIn;
        });
      }
    });
  }

  onLogout() {
    this.authService.signout().subscribe(() => {
      this.isLoggedIn = false;
    });
  }
}
