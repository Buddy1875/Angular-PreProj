import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Tweet } from "../tweet";
import { FirebaseService } from "../firebase.service"

@Component({
  selector: "app-display-twitty",
  templateUrl: "./display-twitty.component.html",
  styleUrls: ["./display-twitty.component.css"]
})
export class DisplayTwittyComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}

  @Input() tweet: Tweet;
  ngOnInit() {
    this.tweet = {
      ...this.tweet,
      date: this.timeAgo(this.tweet.date.toDate())
    };
  }

  timeAgo(val: Date) {
    const now = new Date();
    const diff = Math.abs(now.getTime() - val.getTime());
    const diffDay = Math.ceil(diff / (1000 * 3600 * 24));
    const diffHouse = Math.ceil(diff / (1000 * 3600));
    const diffMinute = Math.ceil(diff / (1000 * 60));
    const diffSecond = Math.ceil(diff / 1000);

    if (diffSecond < 60) {
      return "Juss now";
    }

    if (diffMinute < 60) {
      return `${diffMinute} mintue(s) ago`;
    }

    if (diffHouse < 24) {
      return `${diffHouse} Hour(s) ago`;
    }
    return `${diffDay} day(s) ago`;
  }

  del() {
    if ( window.confirm("confirm") ) {
      this.firebaseService.deleteTweet
        ( this.tweet.id ).then(() => {
          alert("Delete Complete");
        })
        .catch(err => {
          alert("Delete Failure");
        });
    }
  }
}
