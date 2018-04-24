import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivoComponent } from './motivo.component';

describe('MotivoComponent', () => {
  let component: MotivoComponent;
  let fixture: ComponentFixture<MotivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
