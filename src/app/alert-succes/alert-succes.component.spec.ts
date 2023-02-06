import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSuccesComponent } from './alert-succes.component';

describe('AlertSuccesComponent', () => {
  let component: AlertSuccesComponent;
  let fixture: ComponentFixture<AlertSuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertSuccesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
