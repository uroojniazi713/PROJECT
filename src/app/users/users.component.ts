import { devOnlyGuardedExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  firstname: string;
  position: number;
  lastname: string;
  Username: string;
  Role:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, firstname: 'Shan', lastname: 'Masoon', Username: 's.masoon',Role:'Admin'},
  {position: 2, firstname: 'Iqbal', lastname: 'Mehmoood', Username: 'i.mehmoood',Role:'Software Engineer'},
  {position: 3, firstname: 'Salman', lastname: 'Khan', Username: 's.khan',Role:'Team Lead'},
  {position: 3, firstname: 'Saqib', lastname: 'Dogar', Username: 's.dogar',Role:'Software Engineer'},
  {position: 3, firstname: 'Kabir', lastname: 'Sagheer', Username: 'k.sagheer',Role:'Software Engineer'},
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'firstname', 'lastname', 'Username','Role',];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
