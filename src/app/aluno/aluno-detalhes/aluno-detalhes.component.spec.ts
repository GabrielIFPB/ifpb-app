import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoDetalhesComponent } from './aluno-detalhes.component';

describe('AlunoDetalhesComponent', () => {
  let component: AlunoDetalhesComponent;
  let fixture: ComponentFixture<AlunoDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
