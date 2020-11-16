import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddTwittyComponent } from './add-twitty/add-twitty.component';
import { HomeComponent } from './home/home.component';
import { TimeLineComponent } from './time-line/time-line.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AddTwittyComponent, HomeComponent, TimeLineComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
