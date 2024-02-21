import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.sass']
})
export class LoginModalComponent {
  isSignup: boolean = false;
  constructor(private router: Router, private afAuth: AngularFireAuth, private toastr: ToastrService) {}

  closeModal() {
    this.router.navigate(['/']);
  }

  async login(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log('User logged in successfully with email: ', email) //implement redirection
    }
    catch (error) {
      this.toastr.error(this.getErrorMessage(error), "Error");
    }
  }

  async signup(email: string, password: string) {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.toastr.success("Your account has been created", "Success!");
    } catch (error) {
      this.toastr.error(this.getErrorMessage(error), "Error");
    }
  }

  private getErrorMessage(error: any): string {
    switch (error.code) {
      case 'auth/wrong-password':
        return 'Password is incorrect';
      case 'auth/user-not-found':
        return "Account with provided email doesn't exist";
      case 'auth/email-already-in-use':
        return 'Email address is already in use';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters';
      case 'auth/invalid-email':
        return 'Invalid email address';
      default:
        return 'An error occurred while signing up. Please try again later';
    }
  }

  toggleSignup() {
    this.isSignup = !this.isSignup;
  }
}
