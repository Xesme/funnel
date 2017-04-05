import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'userPage',
    component: UserPageComponent
  }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
