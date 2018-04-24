import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaacessoComponent } from './pessoaacesso.component';

describe('PessoaacessoComponent', () => {
  let component: PessoaacessoComponent;
  let fixture: ComponentFixture<PessoaacessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaacessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaacessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
