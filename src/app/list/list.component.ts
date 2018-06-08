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
datas$:any;
  constructor(private dataservice: DataService) {
    this.dataservice.getProducts().subscribe(products=>{
      this.datas$=products['items'];
console.log(this.datas$);
    })

   }

      
  }