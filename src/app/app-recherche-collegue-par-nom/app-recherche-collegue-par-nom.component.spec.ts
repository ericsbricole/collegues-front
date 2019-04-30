import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRechercheCollegueParNomComponent } from './app-recherche-collegue-par-nom.component';

describe('AppRechercheCollegueParNomComponent', () => {
  let component: AppRechercheCollegueParNomComponent;
  let fixture: ComponentFixture<AppRechercheCollegueParNomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRechercheCollegueParNomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRechercheCollegueParNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
