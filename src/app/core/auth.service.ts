import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import * as firebase from "firebase";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  async signInWithGoogle(): Promise<void> {
  await this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  async signInWithFacebook(): Promise<void> {
   await this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  async signInWithTwitter(): Promise<void> {
   await this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    );
  }

  async signInWithEmail(email: string, password: string): Promise<void> {
   await this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async signOut(): Promise<void> {
   await this.angularFireAuth.auth.signOut();
  }
}
