import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McalculatorComponent } from './mcalculator.component';

describe('McalculatorComponent', () => {
  let component: McalculatorComponent;
  let fixture: ComponentFixture<McalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
