import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'assignment-angular';
  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'adress', 'phone', 'website', 'company', 'edit'];

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.getData().subscribe((data) => {
      this.dataSource = data
    })
  }
  editUser(user: any) {
    this.router.navigate(["/user/" + user.id]);
  }

}
