import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddProjectModel } from '../models/add-project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  user: AddProjectModel = new AddProjectModel();
  AddProjectForm!: FormGroup;
  hide = true;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.AddProjectForm = this.FormBuilder.group({
      'title': [this.user.title, [
        Validators.required,
      ]],
      'discription': [this.user.discription, [
        Validators.required,
      ]],
      'teamlead': [this.user.teamlead, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }
}