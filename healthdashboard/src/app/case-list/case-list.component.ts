import { Component, OnInit } from '@angular/core';
import { CaseService } from '../case/case.service';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css'],
  providers:[CaseService]
})
export class CaseListComponent implements OnInit {
  public caseList:any;

  constructor(private caseService: CaseService) { }

  ngOnInit() {
    this.caseList = this.caseService.getCaseList();
  }

}
