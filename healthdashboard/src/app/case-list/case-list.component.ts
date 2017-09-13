import { Component, OnInit } from '@angular/core';
import { CaseService } from '../case/case.service';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css'],
  providers:[CaseService]
})
export class CaseListComponent implements OnInit {
  private caseList:any;
  private filterParam:any;
  private pageNum: number = 1;
  private selectedStatus:string;
  constructor(private caseService: CaseService) { }

  ngOnInit() {
    this.caseList = this.caseService.getCaseList();
  }

  filterOnServiceTypes() {
    this.filterParam = "CoPay";
  }

  filterStatus(val) {
    console.log(val);
    this.selectedStatus = val;
  }

}
