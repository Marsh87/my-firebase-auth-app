import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AngularFireModule } from "angularfire2";
import { AppComponent } from "./app.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LoginComponent } from "./login/login.component";
import { EmailComponent } from "./email/email.component";
import { MembersComponent } from "./members/members.component";
import { AppRoutingModule } from "./app-routing.module";
import { AngularFireAuth } from "angularfire2/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCj6_SxrP5Zz42UpLAoczdaIRN33eUPOeE",
  authDomain: "angularauthapp-efed0.firebaseapp.com",
  databaseURL: "https://angularauthapp-efed0.firebaseio.com",
  projectId: "angularauthapp-efed0",
  storageBucket: "angularauthapp-efed0.appspot.com",
  messagingSenderId: "101032866642"
};

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    EmailComponent,
    MembersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
