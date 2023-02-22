import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { NewUserService } from './new-user.service';

@Injectable({
  providedIn: 'root',
})
export class UserExistsService {
  constructor(private newUserService: NewUserService) {}

  userExists() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName) =>
          this.newUserService.verifyExistentUser(userName)
        ),
        map((userExists) => (userExists ? { userExists: true } : null)),
        first()
      );
    };
  }
}
