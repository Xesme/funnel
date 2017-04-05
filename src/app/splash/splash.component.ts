import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  providers: [ProjectService]
})
export class SplashComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToProject(project) {
    this.router.navigate(['project', project.$key]);
    console.log(project.$key);
  }
}
