import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaUsersComponent } from './grafica-users.component';

describe('GraficaUsersComponent', () => {
  let component: GraficaUsersComponent;
  let fixture: ComponentFixture<GraficaUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficaUsersComponent]
    });
    fixture = TestBed.createComponent(GraficaUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
