import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = '';
  password = '';

  login() {
    console.log(this.user);
    console.log(this.password);
  }
}
