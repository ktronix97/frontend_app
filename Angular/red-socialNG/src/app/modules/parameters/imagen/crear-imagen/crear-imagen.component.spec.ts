import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearImagenComponent } from './crear-imagen.component';

describe('CrearImagenComponent', () => {
  let component: CrearImagenComponent;
  let fixture: ComponentFixture<CrearImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
