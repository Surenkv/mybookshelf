import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';

interface Product {
  identifier?:string;
  title:string;
  author:string;
  rating?:number;
  photoUrl?:string;
  description?:string;
}


@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss']
})


export class MylistComponent implements OnInit {
  postsCol: AngularFirestoreCollection<Product>;
  Product: Product[];
  userId: string;
  constructor(private afs: AngularFirestore, public auth: AuthService) {
this.userId = auth.authState.uid;
   }


  ngOnInit() {
    this.postsCol = this.afs.collection(`users/user/${this.userId}`);
    this.postsCol.valueChanges().subscribe(res => {
      this.Product=res;
    });
  }
  deletePost(postId) {
    var result = confirm("Are you sure to remove it from your collection?");
if (result) {
  this.afs.doc(`users/user/${this.userId}/${postId}`).delete();
}
   
  }
}
