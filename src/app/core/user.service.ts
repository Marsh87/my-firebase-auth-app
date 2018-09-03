import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  async createUser(email: string, password: string): Promise<void> {
    await this.angularFireAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );
  }
}
