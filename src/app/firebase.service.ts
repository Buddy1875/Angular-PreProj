import { Injectable } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from "firebase/app";
import { Tweet } from "./tweet";

@Injectable({ providedIn: "root" })
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  getTweet() {
    let DocRef = this.firestore.collection<Tweet>("twitty", e =>
      e.orderBy("date", "desc")
    );
    return DocRef.valueChanges();
  }

  addTweet(name: string, messege: string) {
    let tweet = {
      mame: name,
      msg: messege,
      date: firebase.default.firestore.Timestamp.now()
    };
    const ref = this.firestore.collection("twitty").add(tweet);
    ref.then(newRef => {
      const upDateID = {
        id: newRef.id
      };
      newRef.update(upDateID);
    });
    return ref;
  }
  //
  deleteTweet(id: string) {
    return this.firestore
      .collection("twitty")
      .doc(id)
      .delete();
  }
}
