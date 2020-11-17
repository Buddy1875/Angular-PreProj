import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Tweet } from "../tweet";

@Component({
  selector: "app-display-twitty",
  templateUrl: "./display-twitty.component.html",
  styleUrls: ["./display-twitty.component.css"]
})
export class DisplayTwittyComponent implements OnInit {
  constructor() {}

  @Input() tweet: Tweet;
  ngOnInit() {}

  timeAgo(val: Date) {
    const now = new Date();
    const diff = Math.abs(now.getTime() - val.getTime());
    const diffDay = Math.ceil(diff / (100 * 3600 * 24));
    const diffHouse = Math.ceil(diff / (1000 * 3600));
    const diffMinute = Math.ceil(diff / (100 * 60));
    const diffSecond = Math.ceil(diff / 1000);

    if (diffSecond < 60) {
      return "Juss now";
    }

    if (diffMinute) {
      return `${diffMinute} mintue(s) ago`;
    }

    if (diffHouse < 60) {
      return `${diffHouse} Hour(s) ago`;
    }
    return `${diffDay} day(s) ago`;
  }
}
