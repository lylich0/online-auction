import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.sass']
})
export class LoginModalComponent {
  isSignup: boolean = false;
  constructor(
              private router: Router,
              private authService: AuthService
  ) {}

  onSignIn(email: string, password: string) {
    this.authService.signin(email, password).subscribe({
      next: () => {
        console.log('Login successful');
        this.closeModal();
      },
      error: error => {
        console.error('Login error:', error);
      }
    });
  }

  onSignUp(email: string, password: string) {
    this.authService.signup(email, password).subscribe({
      next: () => {
        console.log('Login successful');
        this.closeModal();
      },
      error: error => {
        console.error('Login error:', error);
      }
    });
  }

  closeModal() {
    this.router.navigate(['/']);
  }

  toggleSignup() {
    this.isSignup = !this.isSignup;
  }
}
