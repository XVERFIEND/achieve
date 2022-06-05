import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class UserDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    let achieves =  [
      {
        id: 0,
        name: 'Test Achieve',
        desc: 'Blah blah blah',
        diff: 1,
        points: 10,
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOFPIZOnIkk1gJNoJQZQOZygnrcPi2aPmCHwdHysC88VsA3HsfbNlqHoWiI0pKowpUmDQ&usqp=CAU'
      },
      {
        id: 1,
        name: 'Touch grass',
        desc: 'Blah blah blah',
        diff: 1,
        points: 20,
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOFPIZOnIkk1gJNoJQZQOZygnrcPi2aPmCHwdHysC88VsA3HsfbNlqHoWiI0pKowpUmDQ&usqp=CAU'
      },
      {
        id: 2,
        name: 'Achieve on 3',
        desc: 'Blah blah blah',
        diff: 1,
        points: 10,
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOFPIZOnIkk1gJNoJQZQOZygnrcPi2aPmCHwdHysC88VsA3HsfbNlqHoWiI0pKowpUmDQ&usqp=CAU'
      },
      {
        id: 3,
        name: 'The grand achieve',
        desc: 'Blah blah blah',
        diff: 1,
        points: 20,
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOFPIZOnIkk1gJNoJQZQOZygnrcPi2aPmCHwdHysC88VsA3HsfbNlqHoWiI0pKowpUmDQ&usqp=CAU'
      },
    ];
    let users = [
      {
        id: 0,
        ref: "FORX",
        name: "Tom Hackett",
        achieves: [0,1,0,1],
        total: 40
      },
      {
        id: 1,
        ref: "DROO",
        name: "Andy Spurrier",
        achieves: [1,0,0,1],
        total: 30
      },
      {
        id: 2,
        ref: "JOHN",
        name: "JohnnyTay the massive gay",
        achieves: [1,1,1,1],
        total: 60
      }
    ]
    return {
      achieves, users
    };
  }
}
