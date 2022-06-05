// Main page after login. Shows the current users achieves

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../users/user.model';
import { Achievement } from './achievement.model';
import { AchievementsService } from './achievements.service';
import { UsersService } from '../users/users.service';

@Component({

  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  achieves: Achievement[] = [];

  myAchieves: Achievement[] = [];
  allAchieves: Achievement[] =[];

  users: User[] = [];
  user: User[] = [];
  currentUserID:any;

  userName = 'LOADING';
  userRef = 'LOADING';

  totalScore: number = 0;

  constructor(
    private router: Router,
    private achieveService: AchievementsService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
    this.getAchieves();
  }

  getCurrentUser() {
    this.currentUserID = localStorage.getItem('userID');

    this.userService.getUsers().subscribe((data) => {
      this.users = Object.values(data);
      this.user.push(this.users[this.currentUserID]);
      this.userName = this.user[0].name;
      this.userRef = this.user[0].ref;
      console.log(this.user);
    })
  }

  getAchieves() {
    this.achieveService.getAchieves().subscribe((data) => {
      this.achieves = Object.values(data);
      this.user[0].achieves.forEach((e,i) => {
        if(e == 1) {
          this.myAchieves.push(this.achieves[i]);
          this.totalScore += this.achieves[i].points;
        } else {
          this.allAchieves.push(this.achieves[i]);
        }
      });
      this.user[0].total = this.totalScore;
      this.getCurrentUser();
    })
  }
}
