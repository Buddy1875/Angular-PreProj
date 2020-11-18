import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FirebaseService } from "../firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-twitty",
  templateUrl: "./add-twitty.component.html",
  styleUrls: ["./add-twitty.component.css"]
})
export class AddTwittyComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(""),
    msg: new FormControl("")
  });

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit() {}

  onTweet() {
    this.firebaseService.addTweet(this.form.value.name, this.form.value.msg);
    this.router.navigate(["/time-line"]);
  }
}
