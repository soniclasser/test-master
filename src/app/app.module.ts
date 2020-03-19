import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HtmlCodePipe } from './htmlCode.pipe';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';


//services
import { WindowService } from './services/window.service';
import { FormatsService } from './services/formats.service'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, HtmlCodePipe, CustomSelectComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule,FormsModule,],
  providers: [
    WindowService,
    FormatsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
