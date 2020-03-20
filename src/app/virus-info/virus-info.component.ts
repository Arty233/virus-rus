import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Virus } from './virus';

@Component({
  selector: 'virus-info',
  templateUrl: './virus-info.component.html',
  styleUrls: ['./virus-info.component.css']
})
export class VirusInfoComponent implements OnInit {

  url: string = 'https://coronavirus-19-api.herokuapp.com/countries/Russia';
  
  virus: Virus;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((data: Virus) => this.virus=data);

  }


}
