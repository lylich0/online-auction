import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, from, switchMap, tap} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authInitialized$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private afAuth: AngularFireAuth) {
    this.setPersistence().then(() => {
      this.handleAuthState();
      this._authInitialized$.next(true);
    });
  }

  async setPersistence() {
    await this.afAuth.setPersistence('session');
  }

  handleAuthState() {
    this.afAuth.authState.pipe(
      tap(user => {
        const isLoggedIn = !!user;
        this.isLoggedIn$.next(isLoggedIn);
      })
    ).subscribe();
  }

  get authInitialized$() {
    return this._authInitialized$.asObservable();
  }

  signup(email: string, password: string) {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password)).pipe(
      switchMap(() => {
        this.isLoggedIn$.next(true);
        return this.isLoggedIn$;
      }),
      catchError(error => {
        console.error('Signup error:', error.message);
        throw error;
      })
    );
  }

  signin(email: string, password: string) {
    return from(this.afAuth.signInWithEmailAndPassword(email, password)).pipe(
      switchMap(() => {
        this.isLoggedIn$.next(true);
        return this.isLoggedIn$;
      }),
      catchError(error => {
        console.error('Login error:', error.message);
        throw error;
      })
    );
  }

  signout() {
    return from(this.afAuth.signOut()).pipe(
      switchMap(() => {
        this.isLoggedIn$.next(false);
        return this.isLoggedIn$;
      }),
      catchError(error => {
        console.error('Logout error:', error.message);
        throw error;
      })
    );
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
}
