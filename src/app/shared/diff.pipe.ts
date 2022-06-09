import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'changediff'})

export class ChangeDiffPipe implements PipeTransform {
  transform(value: any) {
    if(value == "1") {
      return "Easy";
    } else if (value == "2") {
      return "Medium";
    } else if (value == "3") {
      return "Hard";
    } else if (value == "4") {
      return "Impossible";
    } else if (value == "5") {
      return "Stag";
    } else if (value == "10") {
      return "Secret";
    } else {
      return value;
    }
  }
}
