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
  constructor(private http: HttpClient, private route:ActivatedRoute) {}

  ngOnInit(){
   // const url='http://localhost:5000/alleventype';
    //this.http.get<Data[]>(url).subscribe(data => {
    //  this.category = data;
    //});

    this.id = this.route.snapshot.params['id'];
      const url2 = 'http://localhost:5000/eventype-by-id?id=' + this.id;
      this.http.get<Data[]>(url2).subscribe(data => {
        this.product = data;
      })
}
}
