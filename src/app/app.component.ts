import { Component, OnInit } from '@angular/core';
import { MyService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public userList;

constructor(private myService: MyService){}

getUsers(){
  this.myService.getUsers().subscribe(data => {this.userList = data})
}

ngOnInit(){
  this.getUsers();
}
showInfo($event){
  this.getUsers();
}
// doThis($event){
//   this.getUsers();
// }


}
