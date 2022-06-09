import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedeemService } from '../shared/redeem.service';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  code: string = ""

  codeWasAccepted = false;
  codeWasDenied = false;

  currentUserID: any;

  user: User[] = [];

  constructor(
    private router: Router,
    private redeemService: RedeemService,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.updateUser();
  }

  logOut() {
    localStorage.removeItem('userID');
    this.router.navigate(['/']);
  }

  redeemCode() {
    this.code = this.code.toUpperCase();
    this.codeWasAccepted = false;
    this.codeWasDenied = false;
    let accepted = false;

    if(this.code == "UUDDLRLRBA") {
      if(!this.user[0].achieves.includes(30)) {
        this.user[0].achieves.push(30);
        this.pushCode(this.code, this.user[0]);
      } else {
        this.denied();
      }
      this.code = "";
    } else {
      this.denied();
    }
  }

  accepted() {
    this.codeWasAccepted = true;
    setTimeout(() => {
      this.codeWasAccepted = false;
    }, 1000)
  }

  denied() {
    this.codeWasDenied = true;
    setTimeout(() => {
      this.codeWasDenied = false;
    }, 1000)
  }

  updateUser() {
    this.currentUserID = localStorage.getItem('userID');
    this.user = [];

    this.userService.getUser(this.currentUserID).subscribe((data) => {
      this.user.push(data);
    })
  }

  pushCode(code:string, user:any) {
    if(this.redeemService.redeemCode(code, user)) {
      this.accepted();
      this.updateUser();
    } else {
      this.denied();
    }
  }
}
