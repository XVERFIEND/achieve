import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './users/login/login.component';
import { AllAchieveComponent } from './achievements/all-achieve/all-achieve.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AchievementsComponent,
    UsersComponent,
    AdminComponent,
    LoginComponent,
    AllAchieveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
