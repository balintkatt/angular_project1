import { Component, OnInit } from '@angular/core';
import { MyService } from '../myservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private myService: MyService,
    private location: Location) { }

  public userDetails;

  getDetails() {
    this.myService.getUsers().subscribe((data) => this.userDetails = data);
  }

  ngOnInit() {
    this.getDetails();
  }

  goBack(): void {
    this.location.back();
  }
}
