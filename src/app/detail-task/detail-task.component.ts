import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailTaskModel } from '../models/detail-task.model';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.scss']
})
export class DetailTaskComponent implements OnInit {
  user: DetailTaskModel = new DetailTaskModel();
  DetailTaskForm!: FormGroup;
  hide = true;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.DetailTaskForm = this.FormBuilder.group({
      'title': [this.user.title, [
        Validators.required,
      ]],
      'hours': [this.user.hours, [
        Validators.required,
      ]],
      'duedate': [this.user.duedate, [
        Validators.required,
      ]],
      'discription': [this.user.discription, [
        Validators.required,
      ]],
    'status': [this.user.status, [
      Validators.required,
    ]],
      'Assigned': [this.user.Assigned, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }

}
