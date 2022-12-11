import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Data} from "../../interface/eventtype.interface";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {


  category: Data[] = [];

  constructor(private http: HttpClient) {
  }
  ngOnInit(){// ham nay tu dong chay khi print giao dien
    const url='http://139.180.186.20:3200/alleventype';
    this.http.get<Data[]>(url).subscribe(data => {
      this.category = data;
    });


  }


}

