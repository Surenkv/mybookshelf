import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../core/data.service';import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Router} from '@angular/router';

interface User {
  userName:string;
  imageUrl:string;
  logId:string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userCol: AngularFirestoreCollection<User>;
  users: User[];
  constructor(private afs: AngularFirestore , private router:Router) { }

  ngOnInit() {
    this.userCol = this.afs.collection(`bookshelf`);
    this.userCol.valueChanges().subscribe(res => this.users=res);
  }
  onClick(id:string,callme:string){
this.router.navigate(['/userdetail',id,callme])
  }
}
