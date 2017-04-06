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
  profileKey: string;

  constructor(private authService: AuthService, private router: Router, private projectService: ProjectService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameter) => {
      this.profileKey = urlParameter['id'];
      console.log(this.profileKey)
    });
    // this.projectService.getProfileById(this.projectKey).subscribe( snap => {
    //   this.project = snap;
    // });
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
      img: img,
      authorId: [this.profileKey]
    }
    this.projectService.saveProject(newProject);
  }
}
