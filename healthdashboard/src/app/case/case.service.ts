import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CaseService {

  constructor( private http: Http ) { }

  getCaseList() {
    return this.http.get('http://www.mocky.io/v2/590212490f00006b18d2cb05').map(res => res.json());
  }

}
