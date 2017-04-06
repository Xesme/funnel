import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
  providers: [ProjectService]
})
export class UserPageComponent implements OnInit {
  newProjectForm = false;
  editProjectForm;
  profileKey: string;
  projects: FirebaseListObservable<any[]>;

  constructor(private authService: AuthService, private router: Router, private projectService: ProjectService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameter) => {
      this.profileKey = urlParameter['id'];
    });
    this.projects = this.projectService.getProjectsAuthorId(this.profileKey);
  }

  toggleProjectForm() {
    if (this.newProjectForm) {
      this.newProjectForm = false;
    } else {
      this.newProjectForm = true;
    }
  }

  toggleEditForm(project) {
    if (this.editProjectForm == project) {
      this.editProjectForm = null;
    } else {
      this.editProjectForm = project;
    }
  }

  addProject(title: string, synopsis: string, description: string, goal: string, deadline: string, img: string) {
    var newProject = {
      title: title,
      synopsis: synopsis,
      description: description,
      goal: goal,
      deadline: deadline,
      img: img,
      authorId: this.profileKey
    }
    this.projectService.saveProject(newProject);
  }

}
