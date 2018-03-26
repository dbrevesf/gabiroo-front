import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';
import { Tweet } from '../tweet';
import { TweetSentiment } from '../tweet-sentiment';

@Component({
  selector: 'app-goodnews',
  templateUrl: './goodnews.component.html',
  styleUrls: ['./goodnews.component.css']
})

export class GoodnewsComponent implements OnInit {

	constructor(private tweetService: TweetService) {}

	tweetList: Tweet[];
	currentGoodNews: Tweet;

	ngOnInit() {
		this.getGoodNews();
	}

	getGoodNews(): void {

		this.tweetService.getGoodNews().subscribe(data => this.tweetList = data);
	}

	publishGoodNews(goodNews: Tweet): void {

		this.tweetService.postGoodNews(goodNews).subscribe(data => this.publishGoodNewsReturn(data))
	}

	publishGoodNewsReturn(returnedData: string): void {

		if(returnedData) {
			console.log("Tweet was published");
		} else {
			console.log("Tweet wasn't published");
		}
		
	}
}
