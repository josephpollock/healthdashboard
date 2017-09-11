import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-caseblock',
  templateUrl: './caseblock.component.html',
  styleUrls: ['./caseblock.component.css']
})
export class CaseblockComponent implements OnInit {
  @Input() title:string;
  @Input() number:any;

  private _title:string;
  private _number:any;

  constructor() {
  }

  ngOnInit() {
    this._title = this.title;
    this._number = this.number;
  }

}
