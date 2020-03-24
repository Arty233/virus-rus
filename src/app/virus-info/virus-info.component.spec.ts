import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http'; 
import { VirusInfoComponent } from './virus-info.component';

describe('VirusInfoComponent', () => {
  let component: VirusInfoComponent;
  let fixture: ComponentFixture<VirusInfoComponent>;
  let http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirusInfoComponent ],
      imports: [],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirusInfoComponent);
    component = fixture.componentInstance;
    http = TestBed.get(HttpClient)
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should do math', () => {
  //   const cases = component.virus.cases;
  //   const active = component.virus.active;
  //   const recovered = component.virus.recovered;
  //   const deaths = component.virus.deaths;
  //   const allCases: number = active + recovered + deaths;
  //   expect(cases).toEqual(active + recovered + deaths);
  // })
});
