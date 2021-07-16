import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {

  isLogin: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      this.isLogin = !!user
    })
  }

  logout(): void {
    this.authService.logout()
      .then(() => this.router.navigateByUrl('/'))
  }


}
