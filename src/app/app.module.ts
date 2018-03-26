import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TweetBoxComponent } from './tweet-box/tweet-box.component';
import { TweetService } from './tweet.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { GoodnewsComponent } from './goodnews/goodnews.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';


@NgModule({
  declarations: [
    AppComponent,
    TweetBoxComponent,
    MessagesComponent,
    GoodnewsComponent,
    NavigationbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TweetService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
