import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarefeicaodiaComponent } from './confirmarefeicaodia.component';

describe('ConfirmarefeicaodiaComponent', () => {
  let component: ConfirmarefeicaodiaComponent;
  let fixture: ComponentFixture<ConfirmarefeicaodiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarefeicaodiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarefeicaodiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
