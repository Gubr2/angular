import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadersPageComponent } from './uploaders-page.component';

describe('UploadersPageComponent', () => {
  let component: UploadersPageComponent;
  let fixture: ComponentFixture<UploadersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
