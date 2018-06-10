import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
//firebase
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponent } from './global/global.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ListComponent } from './list/list.component';
import { MylistComponent } from './mylist/mylist.component';
import { LocalService } from './local.service';
import { AuthService } from './core/auth.service';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    NavbarComponent,
    ProductComponent,
    ListComponent,
    MylistComponent,
    UserComponent,
    UserdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    CoreModule,
    SharedModule,
  ],
  providers: [LocalService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
