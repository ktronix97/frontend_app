import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMuroComponent } from './listar-muro.component';

describe('ListarMuroComponent', () => {
  let component: ListarMuroComponent;
  let fixture: ComponentFixture<ListarMuroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMuroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
