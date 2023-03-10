import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = '';
  password = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.authService.authenticate(this.user, this.password).subscribe(
      () => {
        this.router.navigate(['animals']);
      },
      (error) => {
        alert("Invalid user's password");
        console.log(error);
      }
    );
  }
}
