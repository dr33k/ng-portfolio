import { Component, OnInit, Type } from '@angular/core';
import * as moment from 'moment';
import { CertStruct, SkillStruct } from './qualifications.type';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
})
export class QualificationsComponent implements OnInit {

  counter: any;
  skills: SkillStruct[] = [
    {
      name: 'java',
      values: ['spring boot', 'spring cloud', 'quarkus', 'hibernate orm', 'junit5', 'mockito'],
    },
    {
      name: 'python',
      values: ['vanilla python', 'django', 'chatbot']
    },
    {
      name: 'typescript',
      values: ['node', 'express', 'angular', 'prisma orm', 'jest', 'supertest']
    },
    {
      name: 'sql',
      values: ['postgresql', 'mysql']
    },
    {
      name: 'nosql',
      values: ['mongodb']
    }
  ]

  certificates: CertStruct[] = [
    {
      name: 'Java',
      authority: 'HiiT Plc',
      completed: true,
      link: 'https://drive.google.com/file/d/17ym5fgkXTI1A6F-tdj8Rciin73epSX2_/view?usp=sharing',
    },
    {
      name: 'Microservices: Spring Boot and Spring Cloud',
      authority: 'In28M',
      completed: true,
      link: 'https://drive.google.com/file/d/1vw7PgbAaxWkMeR-LF2MlwlGg8uSVoT-l/view?usp=sharing',
    },
    {
      name: 'Node',
      authority: 'The Hong Kong University Of Science and Technology',
      completed: true,
      link: 'https://drive.google.com/file/d/1k3GqZQzi3syAx_uTxkq8k-YzZ_8c-epz/view?usp=drive_link',
    },
    {
      name: 'Angular',
      authority: 'The Hong Kong University Of Science and Technology',
      completed: true,
      link: 'https://drive.google.com/file/d/1-SFTolBUT716AI9mqFB4V6Pltjr1qnhj/view?usp=drive_link',
    },
    {
      name: 'Cybersecurity Professional',
      authority: 'Google',
      completed: false,
    },
  ]

  resume_link = "https://drive.google.com/file/d/1_q2dBTL905teI3rReXC6HY-uZvI6eeBV/view?usp=sharing"

  constructor(){ this.counter=""}

  ngOnInit():void{
    setInterval(()=>this.counter = this.update()
    , 1000);

  }
  update():string{
    const difference =moment.now().valueOf() - moment("2022-05-01").valueOf();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
  }

}
