import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoopComponent } from './todoop.component';

describe('TodoopComponent', () => {
  let component: TodoopComponent;
  let fixture: ComponentFixture<TodoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
