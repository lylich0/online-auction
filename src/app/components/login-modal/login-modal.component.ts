import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.sass']
})
export class LoginModalComponent {
  constructor(private router: Router) { }

  closeModal() {
    this.router.navigate(['/']);
  }
}
