import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddProjectModel } from '../models/add-project.model';
import { groupBy} from 'lodash';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  user: AddProjectModel = new AddProjectModel();
  AddProjectForm!: FormGroup;
  rows: any = [];
  isUpdate = false;
  rowId = null;
  statusArr: any;
  projects: any;

  constructor(private FormBuilder: FormBuilder, private myserviceService: MyserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getproject();
  }

  getproject(): void {
    this.myserviceService.getproject().subscribe(
      (response: any) => {
        this.rows = response.body;
        this.projects = groupBy(response.body, 'status');

        this.statusArr = Object.keys(this.projects);

        this.statusArr.forEach((status: any) => {
          console.log(status, this.projects[status]);
        });
      },
      (err: any) => {
        console.log('==err==', err);
      }
    );
  }

  insertproject(obj: any): void {
    if (this.isUpdate) {
      this.myserviceService.updateproject(this.rowId, obj).subscribe(() => {
        this.rowId = null;
        this.isUpdate = false;
        this.getproject();
      });
    } else {
      this.myserviceService.insertproject(obj).subscribe(() => {
        this.getproject();
      });
    }
  
  }

}
