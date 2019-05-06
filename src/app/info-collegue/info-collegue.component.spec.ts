import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCollegueComponent } from './info-collegue.component';

describe('InfoCollegueComponent', () => {
  let component: InfoCollegueComponent;
  let fixture: ComponentFixture<InfoCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
