import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TobeComponent } from './tobe.component';

describe('TobeComponent', () => {
  let component: TobeComponent;
  let fixture: ComponentFixture<TobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TobeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
