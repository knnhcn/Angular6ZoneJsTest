import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  startDate: Date = moment().startOf('month').toDate();
  endDate: Date = moment().add(5, 'month').endOf('month').toDate();
  dateArray: Date[] = [];

  personList: string[] = [
    'P1', 'P2', 'P3', 'P4', 'P5',
    'P6', 'P7', 'P8', 'P9', 'P10',
    'P11', 'P12', 'P13', 'P14', 'P15', 'P16',
  ];

  ngOnInit() {
    const timeDiff = Math.abs(this.endDate.getTime() - this.startDate.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    for (let j = 0; j < diffDays; j++) {
      this.dateArray.push(moment(this.startDate).add(j, 'day').toDate());
    }
  }

  dayIsWeekend(day: Date): boolean {
    if (moment(day).isoWeekday() === 6 || moment(day).isoWeekday() === 7) {
      console.log(`${moment(day).format('dddd, DD MMMM YYYY')} is a weekend day!`);
      return true;
    }
    return false;
  }

  getStyleString(day: Date) {
    return {
      'width': '240px',
      'color': 'blue'
    };
  }

  onClick(day: Date) {
    console.log(`clicked ${day}`);
  }
}
