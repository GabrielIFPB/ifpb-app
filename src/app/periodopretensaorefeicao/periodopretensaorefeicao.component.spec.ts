import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodopretensaorefeicaoComponent } from './periodopretensaorefeicao.component';

describe('PeriodopretensaorefeicaoComponent', () => {
  let component: PeriodopretensaorefeicaoComponent;
  let fixture: ComponentFixture<PeriodopretensaorefeicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodopretensaorefeicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodopretensaorefeicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
