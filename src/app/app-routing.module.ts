import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodnewsComponent } from './goodnews/goodnews.component';
import { TweetBoxComponent } from './tweet-box/tweet-box.component';

const routes: Routes = [
	{path: 'goodnews', component: GoodnewsComponent},
	{path: 'tweetbox', component: TweetBoxComponent},
	{path: '', component: TweetBoxComponent}
]

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { 
}
