import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushvehiclesComponent } from './pushvehicles.component';

describe('PushvehiclesComponent', () => {
  let component: PushvehiclesComponent;
  let fixture: ComponentFixture<PushvehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushvehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
