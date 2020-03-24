import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('AppComponent', () => {
  let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'covid-russia-info'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('covid-russia-info');
  });

  it('test', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('#test'));
    expect(el.nativeElement.textContent.trim()).toBe('test');
  })

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('covid-russia-info app is running!');
  // });
});
