import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Funnel Your Money into Here Please :)';
  private isLoggedIn: boolean;
  private userDisplayName: string;
  private userEmail: string;
  private userId: string;

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  constructor(public authService: AuthService, private router: Router) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.userDisplayName = '';
          this.userEmail = '';
          this.router.navigate(['']);
        } else {
          this.isLoggedIn = true;
          this.userDisplayName = auth.google.displayName;
          this.userEmail = auth.google.email;
          this.userId = auth.uid;
          console.log('Logged In');
          console.log(auth.uid);
          this.router.navigate(['userPage']);
        }
      }
    );
  }
}
