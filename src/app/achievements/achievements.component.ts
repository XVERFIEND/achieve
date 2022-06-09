// Main page after login. Shows the current users achieves

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../users/user.model';
import { Achievement } from './achievement.model';
import { AchievementsService } from './achievements.service';
import { UsersService } from '../users/users.service';
import { ChangeDiffPipe } from '../shared/diff.pipe';

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
  }

  getCurrentUser() {
    this.currentUserID = localStorage.getItem('userID');

    this.user = [];

    this.userService.getUser(this.currentUserID).subscribe((data) => {
      this.user.push(data);
      this.userName = data.name;
      this.userRef = data.ref;
      this.totalScore = data.total;
      console.log(data);
      this.getAchieves();
    })
  }

  getAchieves() {
    this.myAchieves = [];

    this.achieveService.getAchieves().subscribe((data) => {
      this.achieves = Object.values(data);
      this.user[0].achieves.forEach((e,i) => {
        this.myAchieves.push(this.achieves[e]);
      });
    })
  }

  unachieve(aid: number, points: number) {
    console.log(aid);
    this.user[0].achieves.forEach((e,i) => {
      if(e == aid) {
        this.user[0].achieves.splice(i, 1);
      }
    });
    this.user[0].total -= points;
    console.log(this.user[0]);
    this.userService.updateUser(this.currentUserID, this.user[0]).subscribe((data) => {
      this.getCurrentUser();
    })
  }
}
