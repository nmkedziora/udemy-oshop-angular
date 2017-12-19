import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.angularFireAuth.auth.getRedirectResult().then(result => {
      if (result.user) {
        let route = localStorage.getItem('returnUrl');

        this.router.navigate([route]);
      }
    });
  }

  //   alternatively:

  //   constructor(private auth: AuthService, private router: Router) {
  //   auth.user$.subscribe(user => {
  //     if (user) {
  //       let route = localStorage.getItem('returnUrl');

  //       this.router.navigateByUrl(route);
  //     }
  //   });
  // }
}