import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { ProjectService } from '../project.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
  providers: [ProjectService]
})
export class UserPageComponent implements OnInit {
  newProjectForm = false;

  constructor(private authService: AuthService, private router: Router, private projectService: ProjectService, private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  }

  toggleProjectForm() {
    if (this.newProjectForm) {
      this.newProjectForm = false;
    } else {
      this.newProjectForm = true;
    }
  }

  addProject(title: string, synopsis: string, description: string, goal: string, deadline: string, img: string) {
    var newProject = {
      title: title,
      synopsis: synopsis,
      description: description,
      goal: goal,
      deadline: deadline,
      img: img
    }
    this.projectService.saveProject(newProject);
  }
}
