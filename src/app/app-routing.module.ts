import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsComponent } from './achievements/achievements.component';
import { AllAchieveComponent } from './achievements/all-achieve/all-achieve.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './users/login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'players', component: UsersComponent},
  {path: 'score', component: AchievementsComponent},
  {path: 'all', component: AllAchieveComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
