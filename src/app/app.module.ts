import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppsComponent } from './landing-page/apps/apps.component';

import {MaterialModule} from './material-module/material-module.module';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    LandingPageComponent,
    AppsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
