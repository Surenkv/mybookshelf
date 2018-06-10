import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public auth: AuthService, private router:Router) { }

  ngOnInit() {
    if(!this.auth.authState){
      this.router.navigate(['']);
      alert('Kindly Login to Continue');
    }
  }

}
