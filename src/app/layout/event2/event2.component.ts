import { Component } from '@angular/core';
import {Data} from "../../interface/eventtype.interface";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-event2',
  templateUrl: './event2.component.html',
  styleUrls: ['./event2.component.css']
})
export class Event2Component {

  id: number = 0;
  eventdt: Data[] = [];
  customer: Data[] = [];
  local: Data[] = [];
  review: Data[] = [];
  constructor(private http: HttpClient, private route:ActivatedRoute) {}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    const url='http://localhost:3200/detail-event?id=' + this.id;
    this.http.get<Data[]>(url).subscribe(data => {
      this.eventdt = data;
    });

    const url5='http://localhost:3200/customers-by-event?id=' + this.id;
    this.http.get<Data[]>(url5).subscribe(data4 => {
      this.customer = data4;
    });

    const url2='http://localhost:3200/local-from-event?id=' + this.id;
    this.http.get<Data[]>(url2).subscribe(data2 => {
      this.local = data2;
    });

    const url3='http://localhost:3200/reviews-from-event?id=' + this.id;
    this.http.get<Data[]>(url3).subscribe(data1 => {
      this.review= data1;
    });

  }
}
