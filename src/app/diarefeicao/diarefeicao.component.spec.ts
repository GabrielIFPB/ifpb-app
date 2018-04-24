import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarefeicaoComponent } from './diarefeicao.component';

describe('DiarefeicaoComponent', () => {
  let component: DiarefeicaoComponent;
  let fixture: ComponentFixture<DiarefeicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarefeicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarefeicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
