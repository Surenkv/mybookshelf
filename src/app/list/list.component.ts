import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers:[DataService]
})
export class ListComponent  {
  public valuePass:string;
datas$:any;
  constructor(private dataservice: DataService) {
    this.dataservice.getProducts(this.valuePass).subscribe(products=>{
      this.datas$=products['items'];

    })

   }

   getter(){
     this.dataservice.getProducts(this.valuePass).subscribe(products=>{
      this.datas$=products['items'];
    })
   }
  
   
   
  }