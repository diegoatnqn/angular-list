import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../get-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number | undefined;
    myUser: any;

  constructor(private data: DataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.data.getData().subscribe((data: any) => {
      this.myUser = data.filter((e: { id: number | undefined; }) => e.id == this.id)[0]
      console.log("MY USER", this.myUser)
    })
  }

}
