import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '',
  component: SplashComponent },
  {
    path:'login',
    component: LoginComponent
  }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
