import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaparefeicaoComponent } from './maparefeicao.component';

describe('MaparefeicaoComponent', () => {
  let component: MaparefeicaoComponent;
  let fixture: ComponentFixture<MaparefeicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaparefeicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaparefeicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
