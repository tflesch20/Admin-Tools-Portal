import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConfigService, ConfigFactory, QA_LINK, RULES_LINK, DB_LINK, NG_LINK, DPAP_LINK } from './services/config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ConfigService,
    {provide: 'CONFIG.JSON', useValue: './assets/config.json'},
    {provide: 'QA_LINK', useValue: 'qaURL'},
    {provide: 'RULES_LINK', useValue: 'rulesURL'},
    {provide: 'DB_LINK', useValue: 'dbAdminToolsURL'},
    {provide: 'NG_LINK', useValue: 'ngLink'},
    {provide: 'DPAP_LINK', useValue: 'dpapLink'},
    {provide: QA_LINK, useFactory: ConfigFactory,
    deps: [ConfigService, 'CONFIG.JSON', 'QA_LINK']},
    {provide: RULES_LINK, useFactory: ConfigFactory,
    deps: [ConfigService, 'CONFIG.JSON', 'RULES_LINK']},
    {provide: DB_LINK, useFactory: ConfigFactory,
    deps: [ConfigService, 'CONFIG.JSON', 'DB_LINK']},
    {provide: NG_LINK, useFactory: ConfigFactory,
    deps: [ConfigService, 'CONFIG.JSON', 'NG_LINK']},
    {provide: DPAP_LINK, useFactory: ConfigFactory,
    deps: [ConfigService, 'CONFIG.JSON', 'DPAP_LINK']}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
