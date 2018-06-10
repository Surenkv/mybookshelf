import { Injectable } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: any = null;
  userState:any=null;
  newUserID:any=null;
  constructor(private afs: AngularFirestore,public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(data => this.authState = data)
  }

  get authenticated(): boolean {
    return this.authState !== null
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res=>{
      this.userState = res;
      let newUser={"userName":this.userState.user.displayName,"imageUrl":this.userState.user.photoURL,"logId":this.userState.user.uid};
      this.newUserID=this.userState.user.uid;
      this.afs.collection('bookshelf').doc(this.newUserID).set(newUser);
    });

  }
  logout() {
    this.afAuth.auth.signOut()
  }
}
