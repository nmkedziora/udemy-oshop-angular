import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private auth: AuthService, private userService: UserService, private router: Router) {
    auth.user$.subscribe(user => {
      const returnUrl = localStorage.getItem('returnUrl');

      if (!user) { return; }
      userService.save(user);

      if (!returnUrl) { return; }
      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }
}
