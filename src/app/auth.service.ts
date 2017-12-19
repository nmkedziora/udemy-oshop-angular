import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable'; 

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = angularFireAuth.authState;  
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';

    localStorage.setItem('returnUrl', returnUrl);
    this.angularFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

}
