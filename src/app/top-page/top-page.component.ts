import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {

	isLogin: boolean = false;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
		this.afAuth.onAuthStateChanged((user) => {
			this.isLogin = !!user
		})
  }

}
