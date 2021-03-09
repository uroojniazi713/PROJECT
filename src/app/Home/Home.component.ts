import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})

export class HomeComponent implements OnInit {
  AddProjectForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    documents: new FormControl(),
    teamlead: new FormControl(),
    status: new FormControl(),
    members: new FormControl(),
  });

  rows: any = [];
  isUpdate = false;
  rowId = null;

  constructor(private myserviceService: MyserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getproject();
  }

deleteproject(event: any) {
  const index = this.rows.indexOf(event);
  this.rows.splice(index, 1);
  console.log(event);
  this.myserviceService.deleteproject(event._id).subscribe(() => {
    this.getproject();
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

  onEdit(row: any): void {
    console.log(row);
    this.isUpdate = true;
    this.rowId = row._id;
    this.router.navigateByUrl('/add-project?id=' + row._id);
  }
}
