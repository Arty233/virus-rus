import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirusInfoComponent } from './virus-info.component';

describe('VirusInfoComponent', () => {
  let component: VirusInfoComponent;
  let fixture: ComponentFixture<VirusInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirusInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirusInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
