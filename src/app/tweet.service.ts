import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { Tweet } from './tweet';
import { TweetSentiment } from './tweet-sentiment';

const httpOptions = {
	headers: new HttpHeaders({
    	'Content-Type':  'application/json',
    	'Authorization': 'my-auth-token'
  	})
};

@Injectable()
export class TweetService {

	private tweetUrl = 'http://127.0.0.1:5000';



	constructor(private http: HttpClient,
				private messageService: MessageService) { }

	getTweet(): Observable<Tweet[]> {

		const url = this.tweetUrl + '/tweets';
		return this.http.get<Tweet[]>(url);
	}

	postSentiment(sentiment: TweetSentiment): Observable<string>{

		const url = this.tweetUrl + '/sentiment';
		return this.http.post<string>(url, sentiment, httpOptions);
	}

	private log(message: string) {
		this.messageService.add('TweetService: ' + message);
	}


	private handleError<T> (operation = 'operation', result?: T) {
  		
  		return (error: any): Observable<T> => {

			// TODO: send the error to remote logging infrastructure
    		console.error(error); // log to console instead

		    // TODO: better job of transforming error for user consumption
		    this.log(`${operation} failed: ${error.message}`);

		    // Let the app keep running by returning an empty result.
		    return of(result as T);
		  };
	}

}
