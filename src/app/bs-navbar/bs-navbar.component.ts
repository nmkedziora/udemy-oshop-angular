import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})

export class BsNavbarComponent {
  show: boolean = false;

  constructor(public auth: AuthService) { }

  toggleShow() {
   this.show = !this.show;
  }

  logout() {
    this.auth.logout();
  }
}
