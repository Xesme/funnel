import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  saveProject(newProject) {
    this.projects.push(newProject);
  }

  getProjectByID(key: string){
    return this.angularFire.database.object('projects/' + key)
  }
}
