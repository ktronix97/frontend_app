import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarComentarioComponent } from './eliminar-comentario.component';

describe('EliminarComentarioComponent', () => {
  let component: EliminarComentarioComponent;
  let fixture: ComponentFixture<EliminarComentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarComentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
