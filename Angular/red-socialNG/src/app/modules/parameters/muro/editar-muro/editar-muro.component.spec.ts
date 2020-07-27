import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMuroComponent } from './editar-muro.component';

describe('EditarMuroComponent', () => {
  let component: EditarMuroComponent;
  let fixture: ComponentFixture<EditarMuroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMuroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
