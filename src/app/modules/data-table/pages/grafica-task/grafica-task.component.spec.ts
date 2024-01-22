import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaTaskComponent } from './grafica-task.component';

describe('GraficaTaskComponent', () => {
  let component: GraficaTaskComponent;
  let fixture: ComponentFixture<GraficaTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficaTaskComponent]
    });
    fixture = TestBed.createComponent(GraficaTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
