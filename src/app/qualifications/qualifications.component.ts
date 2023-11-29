import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styles: [`
  .uppercase{
    text-transform: uppercase
  }
  `]
})
export class QualificationsComponent implements OnInit {

  counter: any;
  skills: any = {
    java: ['spring boot', 'spring cloud', 'quarkus', 'hibernate orm', 'junit5', 'mockito', 'thymeleaf'],
    ts: ['node js', 'express', 'angular', 'prisma orm', 'jest', 'supertest'],
    python: [],
    sql: ['postgresql', 'sql server']
  }

  constructor(){ this.counter=""}

  ngOnInit():void{
    setInterval(()=>this.counter = this.update()
    , 1000);
  }
  update():string{
    const difference =moment.now().valueOf() - moment("2021-01-01").valueOf();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
  }

}
