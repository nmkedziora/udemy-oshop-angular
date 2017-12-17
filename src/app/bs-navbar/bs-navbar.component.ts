import { Component } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})

export class BsNavbarComponent {
  show: boolean = false;

  toggleShow() {
   this.show = !this.show;
  }
}
