import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPublicidadComponent } from './eliminar-publicidad.component';

describe('EliminarPublicidadComponent', () => {
  let component: EliminarPublicidadComponent;
  let fixture: ComponentFixture<EliminarPublicidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarPublicidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
