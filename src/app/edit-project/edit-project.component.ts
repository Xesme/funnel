import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  @Input() project;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  sendEditForm(projectToUpdate) {
    this.projectService.updateProject(projectToUpdate)
  }

  deleteProject(projectToDelete) {
    if(confirm("Are you sure you want to delete?")) {
      this.projectService.deleteProject(projectToDelete);
    }
  }
}
