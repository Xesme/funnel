import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ProjectComponent } from './project/project.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'profile/:id',
    component: UserPageComponent
  },
  {
    path: 'project/:id',
    component: ProjectComponent
  }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
