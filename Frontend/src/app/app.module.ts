import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewClientsComponent } from './components/view-clients/view-clients.component';
import { AboutComponent } from './components/shared/about/about.component';
import { ServicesComponent } from './components/shared/services/services.component';
import { PostedComponentComponent } from './components/posted-component/posted-component.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AccurateTemplateComponent } from './components/shared/accurate-template/accurate-template.component';
import { BenifitsTemplateComponent } from './components/shared/benifits-template/benifits-template.component';
import { WhyChooseTemplateComponent } from './components/shared/why-choose-template/why-choose-template.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FormTemplateComponent,
    ViewClientsComponent,
    AboutComponent,
    ServicesComponent,
    PostedComponentComponent,
    AccurateTemplateComponent,
    BenifitsTemplateComponent,
    WhyChooseTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
