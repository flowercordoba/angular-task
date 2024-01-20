import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCreateComponent } from './get-create.component';

describe('GetCreateComponent', () => {
  let component: GetCreateComponent;
  let fixture: ComponentFixture<GetCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCreateComponent]
    });
    fixture = TestBed.createComponent(GetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
