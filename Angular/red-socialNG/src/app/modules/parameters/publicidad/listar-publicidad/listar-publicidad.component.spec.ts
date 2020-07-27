import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPublicidadComponent } from './listar-publicidad.component';

describe('ListarPublicidadComponent', () => {
  let component: ListarPublicidadComponent;
  let fixture: ComponentFixture<ListarPublicidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPublicidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
