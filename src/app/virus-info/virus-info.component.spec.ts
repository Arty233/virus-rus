import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { VirusInfoComponent } from './virus-info.component';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { IVirus } from '../models/virus';

describe('VirusInfoComponent', () => {
  let component: VirusInfoComponent;
  let fixture: ComponentFixture<VirusInfoComponent>;
  let http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VirusInfoComponent],
      imports: [[HttpClientTestingModule]],
      providers: [VirusInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirusInfoComponent);
    component = fixture.componentInstance;
    http = TestBed.get(HttpClient)
    fixture.detectChanges();
  });


  // it(
  //   'should get data',
  //   inject(
  //     [HttpTestingController, VirusInfoComponent],
  //     (
  //       httpMock: HttpTestingController,
  //       dataService: VirusInfoComponent
  //     ) => {
  //       expect(component.changeCountry('Russia')).toBeTruthy();
  //     }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data', () => {
    http.get('https://coronavirus-19-api.herokuapp.com/countries/Russia').subscribe(res => {
      expect(res).toBeTruthy();
    })
  })

  it('should do math', () => {
    http.get('https://coronavirus-19-api.herokuapp.com/countries/Russia').subscribe((res: IVirus) => {
      const cases = res.cases;
      const active = res.active;
      const recovered = res.recovered;
      const deaths = res.deaths;
      expect(cases).toEqual(active + recovered + deaths);
    })
  })
});
