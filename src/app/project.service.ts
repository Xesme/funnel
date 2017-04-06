import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  // rootRef = firebase.database.ref();
  // authorProjects;

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
    return this.angularFire.database.object('projects/' + key);
  }

  getProjectsAuthorId(id: string) {
    console.log(id);
    return this.angularFire.database.list('/projects/', {
      query: {
        orderByChild: 'authorId',
        equalTo: id
      }
    });
    // return this.rootRef.child('projects').orderByChild('authorId').equalTo(id);
  }
}
