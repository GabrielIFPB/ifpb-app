import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaRefeicaoComponent } from './diarefeicao.component';

describe('DiarefeicaoComponent', () => {
  let component: DiaRefeicaoComponent;
  let fixture: ComponentFixture<DiaRefeicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaRefeicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaRefeicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
