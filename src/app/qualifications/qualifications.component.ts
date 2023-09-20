import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html'
})
export class QualificationsComponent implements OnInit {

  counter?: string;

  constructor(){}

  ngOnInit():void{
    setInterval(this.update, 1000);
  }
  update():void{
    const startDate = new Date("2021-01-01");
    const difference = new Date().getMilliseconds() - startDate.getMilliseconds();

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    this.counter = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
}

}
