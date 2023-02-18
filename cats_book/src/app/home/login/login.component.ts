import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = '';
  password = '';

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {}

  login() {
    this.authService.authenticate(this.user, this.password).subscribe(
      () => {
        console.log('successful authentication');
      },
      (error) => {
        alert("Invalid user's password");
        console.log(error);
      }
    );
  }
}
