import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [

  ]

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = Object.values(data);

      this.users = this.users.sort((n1,n2) => {
        if(n1.total > n2.total) {
          return -1;
        }
        if(n1.total < n2.total) {
          return 1
        }

        return 0;
      });
    })
  }


}
