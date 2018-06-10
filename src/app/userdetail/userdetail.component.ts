import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface Product {
  identifier?:string;
  title:string;
  author:string;
  rating?:number;
  photoUrl?:string;
  description?:string;
}

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {
  postsCol: AngularFirestoreCollection<Product>;
  Product: Product[];
  callme:any;
  constructor(private afs: AngularFirestore,private ar:ActivatedRoute , private router:Router ) { }

  ngOnInit() {
    const checkId=this.ar.snapshot.params['id'];
    this.callme=this.ar.snapshot.params['callme'];
    this.postsCol = this.afs.collection(`bookshelf/${checkId}/mylib`);
    this.postsCol.valueChanges().subscribe(res => {
      this.Product=res;
    });
  }
goHere(){
  this.router.navigate(['/library'])
}
}
