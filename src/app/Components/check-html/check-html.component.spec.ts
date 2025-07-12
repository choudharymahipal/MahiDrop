import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckHTMLComponent } from './check-html.component';

describe('CheckHTMLComponent', () => {
  let component: CheckHTMLComponent;
  let fixture: ComponentFixture<CheckHTMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckHTMLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
