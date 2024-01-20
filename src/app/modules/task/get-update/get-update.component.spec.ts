import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUpdateComponent } from './get-update.component';

describe('GetUpdateComponent', () => {
  let component: GetUpdateComponent;
  let fixture: ComponentFixture<GetUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetUpdateComponent]
    });
    fixture = TestBed.createComponent(GetUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
