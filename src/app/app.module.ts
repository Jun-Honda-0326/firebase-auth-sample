import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { TopPageComponent } from './top-page/top-page.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    TopPageComponent
  ],
  imports: [
    BrowserModule,
		RouterModule,
		FormsModule,
    AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFireDatabaseModule
  ],
  providers: [
		AuthService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
