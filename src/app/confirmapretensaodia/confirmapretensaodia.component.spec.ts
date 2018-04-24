import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmapretensaodiaComponent } from './confirmapretensaodia.component';

describe('ConfirmapretensaodiaComponent', () => {
  let component: ConfirmapretensaodiaComponent;
  let fixture: ComponentFixture<ConfirmapretensaodiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmapretensaodiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmapretensaodiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
