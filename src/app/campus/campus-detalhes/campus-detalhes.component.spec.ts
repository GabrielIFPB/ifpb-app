import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusDetalhesComponent } from './campus-detalhes.component';

describe('CampusDetalhesComponent', () => {
  let component: CampusDetalhesComponent;
  let fixture: ComponentFixture<CampusDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
