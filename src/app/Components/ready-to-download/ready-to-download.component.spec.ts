import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyToDownloadComponent } from './ready-to-download.component';

describe('ReadyToDownloadComponent', () => {
  let component: ReadyToDownloadComponent;
  let fixture: ComponentFixture<ReadyToDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadyToDownloadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadyToDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
