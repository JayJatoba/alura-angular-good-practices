import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/authentication/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user$ = this.userService.returnUser(); //is observable when $ after variable
  constructor(private userService: UserService, private router: Router) {}

  logOut() {
    this.userService.logOut();
    this.router.navigate(['']);
  }
}
