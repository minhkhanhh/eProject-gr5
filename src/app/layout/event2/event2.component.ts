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
  product: Data[] = [];
  constructor(private http: HttpClient, private route:ActivatedRoute) {}

  ngOnInit(){

  }
}
