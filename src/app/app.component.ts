import { Component, Inject, OnInit } from '@angular/core';
import { ConfigService, QA_LINK, RULES_LINK, DB_LINK, NG_LINK, DPAP_LINK } from './services/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //rendering: boolean;
  expanded: boolean;
  config: any;
  qaURL: string;
  rulesURL: string;
  dbAdminToolsURL: string;
  ngLink: string;
  dpapLink: string;

  constructor(private configService: ConfigService,
              @Inject(QA_LINK) qaURL: string,
              @Inject(RULES_LINK) rulesURL: string,
              @Inject(DB_LINK) dbAdminToolsURL: string,
              @Inject(NG_LINK) ngLink: string,
              @Inject(DPAP_LINK) dpapLink: string) {
    this.config = configService.loadJSON('./assets/config.json');
    this.qaURL = qaURL;
    this.rulesURL = rulesURL;
    this.dbAdminToolsURL = dbAdminToolsURL;
    this.ngLink = ngLink;
    this.dpapLink = dpapLink;
    ///this.rendering = false;
    this.expanded = false;
  }

  inProgress(buttonPressed: string) {
    //this.rendering = true;
    if (buttonPressed === 'QA UI') { window.location.href = this.qaURL; }
    if (buttonPressed === 'Rules UI') { window.location.href = this.rulesURL; }
    if (buttonPressed === 'DBAdminTool UI') { window.location.href = this.dbAdminToolsURL; }
  }
  NGHome() { window.open(this.ngLink); }
  DPaCHome() { window.open(this.dpapLink); }
}
