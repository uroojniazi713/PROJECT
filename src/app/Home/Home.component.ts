import { devOnlyGuardedExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  description: string;
  Documents: string;
  TeamLead:string;
  Members:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'xyz', description: 'Project xyz', Documents: 'etc.pdf,etc.doc',TeamLead:'Salman Khan',Members:'Saqib Doger,Kabir Sagheet'},
  {position: 1, name: 'xyz', description: 'Project xyz', Documents: 'etc.pdf,etc.doc',TeamLead:'Salman Khan',Members:'Saqib Doger,Kabir Sagheet'},
  {position: 1, name: 'xyz', description: 'Project xyz', Documents: 'etc.pdf,etc.doc',TeamLead:'Salman Khan',Members:'Saqib Doger,Kabir Sagheet'},
  {position: 1, name: 'xyz', description: 'Project xyz', Documents: 'etc.pdf,etc.doc,etc.ppt',TeamLead:'Salman Khan',Members:'Saqib Doger,Kabir Sagheet'},
];
@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'description', 'Documents','TeamLead','Members','icon'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
