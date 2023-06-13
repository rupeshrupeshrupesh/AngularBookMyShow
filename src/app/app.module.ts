import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MoviesComponent } from './components/movies/movies.component';
// import { NgxPaginationModule } from 'ngx-pagination';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { ToastModule } from 'ng2-toastr/ng2-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    MoviesComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule,
    // NgxPaginationModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
