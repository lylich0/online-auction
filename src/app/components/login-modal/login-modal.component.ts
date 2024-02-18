import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.sass']
})
export class LoginModalComponent {
  isSignup: boolean = false;
  constructor(private router: Router, private afAuth: AngularFireAuth, private authService: AuthService) { }

  closeModal() {
    this.router.navigate(['/']);
  }

  async login(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log('User logged in successfully with email: ', email)
    }
    catch (error) {
      console.error('Error logging in:', error);
    }
  }

  async signup(email: string, password: string) {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log('User created successfully with email:', email);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }

  toggleSignup() {
    this.isSignup = !this.isSignup;
  }
}
