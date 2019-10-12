import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaActaComponent } from './vista-acta.component';

describe('VistaActaComponent', () => {
  let component: VistaActaComponent;
  let fixture: ComponentFixture<VistaActaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaActaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaActaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
