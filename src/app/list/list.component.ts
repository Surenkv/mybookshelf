import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../core/data.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers:[DataService,AuthService]
})
export class ListComponent implements OnInit {
  public valuePass:string;
  public userId:string;

datas$:any;
  constructor(private afs: AngularFirestore,private dataservice: DataService,private auth:AuthService) {
    this.dataservice.getProducts(this.valuePass).subscribe(products=>{
      this.datas$=products['items'];
    })

   }

   getter(){
     this.dataservice.getProducts(this.valuePass).subscribe(products=>{
      this.datas$=products['items'];
    })
   }
  
   addProduct(i){
     let savedata=this.datas$[i]['volumeInfo'];
     let rate="",newPic="";
     if(this.auth.authState){
       this.userId=this.auth.authState.uid;
       if (savedata.averageRating) {
        rate=savedata.averageRating;
      }else{
        rate="NA";
      }
      if (savedata.imageLinks) {
       newPic=savedata.imageLinks.thumbnail;
     }else{
       newPic="/assets/images/imageno.jpg";
     }
      let newData={"title":savedata.title,"author":savedata.authors[0],"rating":rate,"description":savedata.description,"photoUrl":newPic,"identifier":savedata.industryIdentifiers[0].identifier}
      this.afs.collection(`users/user/${this.userId}`).doc(newData.identifier).set(newData);
       alert(savedata.title + " has been successfully updated to your collection");
 
     }else{
      alert("Kindly Login to Continue");
      
    }

     
   }
   ngOnInit() {

  }

  }