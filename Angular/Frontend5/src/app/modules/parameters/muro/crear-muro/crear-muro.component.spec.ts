import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMuroComponent } from './crear-muro.component';

describe('CrearMuroComponent', () => {
  let component: CrearMuroComponent;
  let fixture: ComponentFixture<CrearMuroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearMuroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
