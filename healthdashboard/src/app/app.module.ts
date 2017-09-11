import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CasesComponent } from './cases/cases.component';
import { CaseblockComponent } from './caseblock/caseblock.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CaseListComponent } from './case-list/case-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CasesComponent,
    CaseblockComponent,
    SidebarComponent,
    CaseListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
