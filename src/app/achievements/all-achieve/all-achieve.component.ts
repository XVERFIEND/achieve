import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/users/user.model';
import { Achievement } from '../achievement.model';
import { AchievementsService } from '../achievements.service';
import { UsersService } from 'src/app/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-achieve',
  templateUrl: './all-achieve.component.html',
  styleUrls: ['./all-achieve.component.scss']
})
export class AllAchieveComponent implements OnInit {

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
    this.getAchieves();
  }

  checkLocal() {
    if(localStorage.length <= 0) {
      this.router.navigate(['/']);
    }
  }

  getCurrentUser() {
    this.checkLocal();
    this.currentUserID = localStorage.getItem('userID');

    this.userService.getUsers().subscribe((data) => {
      this.users = Object.values(data);
      this.user.push(this.users[this.currentUserID]);
      this.userName = this.user[0].name;
      this.userRef = this.user[0].ref;
    })
  }

  private getAchieves() {
    this.checkLocal();
    this.getCurrentUser();

    this.achieveService.getAchieves().subscribe((data) => {
      this.achieves = Object.values(data);
      this.user[0].achieves.forEach((e,i) => {
        if(e == 1) {
          this.myAchieves.push(this.achieves[i]);
          this.totalScore += this.achieves[i].points;
        } else {
          this.newAchieves.push(this.achieves[i]);
        }
      })
    })
  }

  getAchieve(id:number): void {
    // console.log(id)
    // this.user[0].achieves[id] = 1;
    // this.userService.editUser(this.user[0]);
    // this.getAchieves();
  }

}
