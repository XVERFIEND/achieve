import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  thisUser: User = new User(0, '', '', [], 0);
  edit = true;
  add = false;
  users: User[] = [];
  searchUser: any;
  loginFail: boolean = false;

  private usersUrl = 'api/users';

  constructor(
    private router: Router,
    private userService: UsersService
    ) { }

  ngOnInit(): void {
    if(localStorage.getItem('userID')) {
      this.router.navigate(['score']);
    }
    this.getUsers();
  }

  doLogin() {
    this.username = this.username.toUpperCase();
    this.findMe(this.username);
  }

  findMe(e:string) {
    this.searchUser = this.users.find(x=> x.ref == e);
    if(this.searchUser) {
      localStorage.setItem('userID', this.searchUser.id);
      this.router.navigate(['/score']);
    } else {
      this.loginFail = true;
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = Object.values(data);
    })
  }
}
