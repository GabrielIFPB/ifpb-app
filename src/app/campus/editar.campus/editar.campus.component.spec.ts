import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCampusComponent } from './editar.campus.component';

describe('EditarCampusComponent', () => {
  let component: EditarCampusComponent;
  let fixture: ComponentFixture<EditarCampusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCampusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
