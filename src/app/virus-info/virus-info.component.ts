import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IVirus } from '../models/virus';
import { environment } from '../../environments/environment';

@Component({
  selector: 'virus-info',
  templateUrl: './virus-info.component.html',
  styleUrls: ['./virus-info.component.css']
})
export class VirusInfoComponent implements OnInit {

  // url: string = 'https://coronavirus-19-api.herokuapp.com/countries/Russia';
  //src enviroments.ts тудв конфиги
  virus: IVirus;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(environment.url).subscribe((data: IVirus) => this.virus=data);
  }


}

//Написать юнит тесты