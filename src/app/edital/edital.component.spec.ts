import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditalComponent } from './edital.component';

describe('EditalComponent', () => {
  let component: EditalComponent;
  let fixture: ComponentFixture<EditalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
