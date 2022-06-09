import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.model';
import { Achievement } from '../achievements/achievement.model';
@Injectable({
  providedIn: 'root'
})

export class RedeemService {

  constructor(
    private userService: UsersService
  ) { }

  redeemCode(code:any, user:User) {
    this.userService.updateUser(user.id, user).subscribe((data) => {

    })

    return true;
  }
}
