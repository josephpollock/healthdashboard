import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  private cases:any;

  constructor() {
    this.cases = [
      {'title':"Benefits Verification", "number":14},
      {'title':"Prior Authorization", "number":14},
      {'title':"Prescription Referral", "number":14},
      {'title':"PAP", "number":14},
      {'title':"Copay", "number":14},
    ];
  }

  getCases() {
    return this.cases;
  }

  ngOnInit() {

  }

}
