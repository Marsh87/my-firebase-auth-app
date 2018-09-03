import { Component, OnInit, HostBinding } from "@angular/core";
import { AuthService } from "../core/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle().then(() => {
      console.log("Logged in");
    }).catch(() => {
      console.log("Something went wrong");
    });
  }

  signOut() {
    this.authService.signOut().then(() => {
      console.log("Signed out");
    }).catch(() => {
      console.log("Something went wrong");
    });
  }
}
