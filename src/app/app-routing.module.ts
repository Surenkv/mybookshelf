import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalComponent } from './global/global.component';
import { ProductComponent } from './product/product.component';
import { UserdetailComponent } from './userdetail/userdetail.component';


const routes: Routes = [
  {
    path:"",
    component:GlobalComponent
  },
  {
    path:"library",
    component:ProductComponent
  },
  {
    path:"userdetail/:id/:callme",
    component:UserdetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
