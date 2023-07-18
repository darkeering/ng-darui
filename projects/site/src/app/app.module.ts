import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DocgeniTemplateModule } from '@docgeni/template';
import { DOCGENI_SITE_PROVIDERS, RootComponent } from './content/index';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [BrowserModule, DocgeniTemplateModule, BrowserAnimationsModule, RouterModule.forRoot([])],
  providers: [...DOCGENI_SITE_PROVIDERS],
  bootstrap: [RootComponent]
})
export class AppModule {
  constructor() { }
}