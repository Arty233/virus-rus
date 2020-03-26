import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IVirus } from '../models/virus';
import { environment } from '../../environments/environment';

@Component({
  selector: 'virus-info',
  templateUrl: './virus-info.component.html',
  styleUrls: ['./virus-info.component.css']
})
export class VirusInfoComponent implements OnInit {

  virus: IVirus;
  countries: string[] = ["China", "Italy", "USA", "Russia"];
  currentCountry: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get(environment.url).subscribe((data: IVirus) => this.virus=data);
  }

  changeCountry(newCountry: string) {
    this.currentCountry = newCountry;
    this.http.get(environment.url + this.currentCountry).subscribe((data: IVirus) => this.virus=data);
    this.ngOnInit()
  }


}

//Написать юнит тесты