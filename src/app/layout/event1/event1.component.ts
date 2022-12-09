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
   // const url='http://localhost:5000/alleventype';
    //this.http.get<Data[]>(url).subscribe(data => {
    //  this.category = data;
    //});

    this.id = this.route.snapshot.params['id'];
      const url2 = 'http://localhost:5000/eventype-by-id?id=' + this.id;
      this.http.get<Data[]>(url2).subscribe(data1 => {
        this.product = data1;
        console.log(data1);
      })
    const url3 = 'http://localhost:5000/local-from-eventype-by-id?id=' + this.id;
    this.http.get<Data[]>(url3).subscribe(data2 => {
      this.location = data2;
      console.log(data2);
    })

    const url4 = 'http://localhost:5000/service-from-eventype-by-id?id=' + this.id;
    this.http.get<Data[]>(url4).subscribe(data3 => {
      this.service = data3;
      console.log(data3);
    })

    const url5='http://localhost:5000/get-events-by-type?id=' + this.id;
    this.http.get<Data[]>(url5).subscribe(data4 => {
      this.event = data4;
    });

}
}

