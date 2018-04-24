import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodorefeicaorealizadaComponent } from './periodorefeicaorealizada.component';

describe('PeriodorefeicaorealizadaComponent', () => {
  let component: PeriodorefeicaorealizadaComponent;
  let fixture: ComponentFixture<PeriodorefeicaorealizadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodorefeicaorealizadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodorefeicaorealizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
