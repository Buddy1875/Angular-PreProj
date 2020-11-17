import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-add-twitty",
  templateUrl: "./add-twitty.component.html",
  styleUrls: ["./add-twitty.component.css"]
})
export class AddTwittyComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    msg: new FormControl('')
  })  


  constructor() {}

  ngOnInit() {}
}
