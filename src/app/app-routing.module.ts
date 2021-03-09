import { UsersComponent } from './users/users.component';
import { DetailTaskComponent } from './detail-task/detail-task.component';
import { AddSecondTaskComponent } from './add-second-task/add-second-task.component';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { ProjectBoardComponent } from './project-board/project-board.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './Home-page/Home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { NewTaskComponent} from './new-task/new-task.component';

const routes: Routes = [{
  path: '',
  component: HomePageComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'login',
  component: LoginComponent
},
{
  path: 'Home',
  component: HomeComponent
},
{
  path: 'add-project',
  component: AddProjectComponent
},
{
  path: 'project-board',
  component: ProjectBoardComponent
},
{
  path: 'new-task',
  component: NewTaskComponent
},
{
  path: 'add-new-task',
  component: AddNewTaskComponent
},
{
  path: 'add-second-task',
  component: AddSecondTaskComponent
},
{
  path: 'detail-task',
  component: DetailTaskComponent
},
{
  path: 'users',
  component: UsersComponent
}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
