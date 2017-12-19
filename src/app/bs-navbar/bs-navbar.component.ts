import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})

export class BsNavbarComponent {
  show: boolean = false;

  constructor(private afAuth: AngularFireAuth) { }

  toggleShow() {
   this.show = !this.show;
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
