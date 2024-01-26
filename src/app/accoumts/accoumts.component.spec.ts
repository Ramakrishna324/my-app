import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoumtsComponent } from './accoumts.component';

describe('AccoumtsComponent', () => {
  let component: AccoumtsComponent;
  let fixture: ComponentFixture<AccoumtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccoumtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccoumtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
