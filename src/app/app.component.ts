
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/shared/auth.service';
import { Router } from '@angular/router';
@Component({
    selector:'bwm-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

   title="book-with-me"
    constructor(
        public auth: AuthService,
        private router: Router )
        {

        }

    ngOnInit() {
        this.auth.checkAuthentication();
      }
    
    logout = () => {
        this.auth.logout();
        this.router.navigate(['/rentals']);
      }
    
  }