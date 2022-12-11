import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Data} from "../../interface/eventtype.interface";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery:  Data[] = [];
  constructor(private http: HttpClient) {
  }
  ngOnInit(){// ham nay tu dong chay khi print giao dien

    const url='http://139.180.186.20:3200/gallery';
    this.http.get<Data[]>(url).subscribe(data => {
      this.gallery = data;
    });


  }


}
