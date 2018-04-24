import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueioComponent } from './bloqueio.component';

describe('BloqueioComponent', () => {
  let component: BloqueioComponent;
  let fixture: ComponentFixture<BloqueioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloqueioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
