import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretensaorefeicaoComponent } from './pretensaorefeicao.component';

describe('PretensaorefeicaoComponent', () => {
  let component: PretensaorefeicaoComponent;
  let fixture: ComponentFixture<PretensaorefeicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretensaorefeicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretensaorefeicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
