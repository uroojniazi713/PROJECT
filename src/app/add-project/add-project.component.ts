import { element } from 'protractor';
import { result } from 'lodash';
import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AddProjectModel } from '../models/add-project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})

export class AddProjectComponent implements OnInit {
  AddProjectModel = new AddProjectModel();
  DetailTaskForm!: FormGroup;
  AddProjectForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    documents: new FormControl(),
    teamlead: new FormControl(),
    status: new FormControl(),
    members: new FormControl(),
  });

  rows: any;
  isUpdate = false;
  rowId = null;

  uploadedFiles: Array<File> = [];

  constructor(private myserviceService: MyserviceService, private router: ActivatedRoute, private http: HttpClient,private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.AddProjectForm = this.FormBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      documents: ['', Validators.required],
      teamlead: ['', Validators.required],
      status: ['', Validators.required],
      members: ['', Validators.required],
    });
    
    const queryParams = this.router.snapshot.queryParams;
    console.log('==params==', this.router.snapshot.queryParams);
    if (queryParams.id) {
      this.isUpdate = true;
      this.rowId = queryParams.id;
    }

    this.myserviceService.getCurrentData(queryParams.id).subscribe((result: any) => {
      console.log('result', result.body);
      this.AddProjectForm.get('title')?.setValue(result.body.title);
      this.AddProjectForm.get('discription')?.setValue(result.body.discription);
      this.AddProjectForm.get('teamlead')?.setValue(result.body.teamlead);
      this.AddProjectForm.get('status')?.setValue(result.body.status);
      this.AddProjectForm.get('members')?.setValue(result.body.members)
      this.AddProjectForm.get('documents')?.setValue(result.body.documents)
    });
  }

  save(): void {
    console.log(this.AddProjectForm.value);
    //this.router.navigateByUrl('/Home')
    this.insertproject({
      title: this.AddProjectForm.value.title,
      description: this.AddProjectForm.value.description,
      documents: this.AddProjectForm.value.documents,
      teamlead: this.AddProjectForm.value.teamlead,
      status: this.AddProjectForm.value.status,
      members: this.AddProjectForm.value.members,
    });
  }

  getproject(): void {
    this.myserviceService.getproject().subscribe(
      (response: any) => {
        this.rows = response.body;
      },
      (err: any) => {
        console.log('==err==', err);
      }
    );
  }

  insertproject(obj: any): void {
    console.log('obj', obj);
    console.log('rowid', this.rowId);
    console.log('update', this.isUpdate);
    if (this.isUpdate) {
      this.myserviceService.updateproject(this.rowId, obj).subscribe(() => {
        //this.rowId = null;
        this.isUpdate = false;
        this.getproject();
      });
    } else {
      this.myserviceService.insertproject(obj).subscribe(() => {
        this.getproject();
      });
    }
  }

  fileChange(element: any) {
    this.uploadedFiles = element.target.files;
  }

  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.http.post('http://localhost:3000/api/upload', formData)
      .subscribe((response) => {
        console.log('response received is ', response);
      })
  }
}