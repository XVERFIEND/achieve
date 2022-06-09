import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/users/user.model';
import { Achievement } from '../achievement.model';
import { AchievementsService } from '../achievements.service';
import { UsersService } from 'src/app/users/users.service';
import { Router } from '@angular/router';
import { ChangeDiffPipe } from '../../shared/diff.pipe';
import { findIndex } from 'rxjs';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-all-achieve',
  templateUrl: './all-achieve.component.html',
  styleUrls: ['./all-achieve.component.scss']
})
export class AllAchieveComponent implements OnInit {

  achievesBackup: Achievement[] = [];
  achieves: Achievement[] = [];
  myAchieves: Achievement[] = [];
  newAchieves: Achievement[] = [];

  users: User[] = [];
  user: User[] = [];
  currentUserID:any;

  userName = 'LOADING';
  userRef = 'LOADING';

  totalScore:number = 0;

  constructor(
    private achieveService: AchievementsService,
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkLocal();
    this.getCurrentUser();
  }

  checkLocal() {
    if(localStorage.length <= 0) {
      this.router.navigate(['/']);
    }
  }

  getCurrentUser() {
    this.checkLocal();
    this.currentUserID = localStorage.getItem('userID')
    this.totalScore = 0;

    this.userService.getUser(this.currentUserID).subscribe((data) => {
      this.user.push(data);
      this.userName = data.name;
      this.userRef = data.ref;
      this.totalScore = data.total;
      this.getAchieves();
    })
  }

  getAchieves() {
    this.checkLocal();
    this.achieves = [];
    this.myAchieves = [];

    this.achieveService.getAchieves().subscribe((data) => {
      this.achieves = Object.values(data);
      this.achievesBackup = Object.values(data);

      this.user[0].achieves.forEach((e,i) => {
        this.myAchieves.push(this.achievesBackup[e]);
        this.achieves[e].points = 0;
      });
    });
  }

  getAchieve(aid:number, points:number): void {
    this.user[0].achieves.push(aid);
    this.user[0].total += points;
    this.totalScore += points;
    this.userService.updateUser(this.currentUserID, this.user[0]).subscribe((data) => {
      this.getCurrentUser();
    })
  }
}
