import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './Home/Home.component';
import { HomePageComponent } from './Home-page/Home-page.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectBoardComponent } from './project-board/project-board.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { AddSecondTaskComponent } from './add-second-task/add-second-task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    HomeComponent,
    HomePageComponent,
    AddProjectComponent,
    ProjectBoardComponent,
    NewTaskComponent,
    AddNewTaskComponent,
    AddSecondTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
