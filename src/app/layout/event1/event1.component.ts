import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Data} from "../../interface/eventtype.interface";

@Component({
  selector: 'app-event1',
  templateUrl: './event1.component.html',
  styleUrls: ['./event1.component.css']
})

export class Event1Component  implements OnInit {

  id: number = 0;
  product: Data[] = [];
  location: Data[] = [];
  service: Data[] = [];
  event : Data[] = [];
  constructor(private http: HttpClient, private route:ActivatedRoute) {}

  ngOnInit(){

    this.id = this.route.snapshot.params['id'];
      const url2 = 'http://139.180.186.20:3200/eventype-by-id?id=' + this.id;
      this.http.get<Data[]>(url2).subscribe(data1 => {
        this.product = data1;
        console.log(data1);
      });
    const url3 = 'http://139.180.186.20:3200/local-from-eventype-by-id?id=' + this.id;
    this.http.get<Data[]>(url3).subscribe(data2 => {
      this.location = data2;
      console.log(data2);
    });

    const url4 = 'http://139.180.186.20:3200/service-from-eventype-by-id?id=' + this.id;
    this.http.get<Data[]>(url4).subscribe(data3 => {
      this.service = data3;
      console.log(data3);
    });

    const url5='http://139.180.186.20:3200/get-events-by-type?id=' + this.id;
    this.http.get<Data[]>(url5).subscribe(data4 => {
      this.event = data4;
    });

}
}

