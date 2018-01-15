import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyService } from './myservice.service';
import { HttpModule } from '@angular/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
