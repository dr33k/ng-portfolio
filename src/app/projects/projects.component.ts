import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = {
    personal: {
      'morningstar': {
        description: '',
        github_link: '',
        docker_image: 'dr33k/morningstar'
      },
      'pinger': {},
      'm-ploy-e': {},
      'bulky books': {},
      'eat': {},
      'd-bot': {},
      'tic-tac-toe': {}
    },
    'enterprise': {
      'safapply': {}
    },

  }
  ngOnInit(): void {

  }

}
