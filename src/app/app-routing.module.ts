import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { LoginComponent } from '../app/components/login/login.component'
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'forgotpass', component: ForgotPasswordComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
