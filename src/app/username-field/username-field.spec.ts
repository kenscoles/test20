import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameField } from './username-field';

describe('UsernameField', () => {
  let component: UsernameField;
  let fixture: ComponentFixture<UsernameField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsernameField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernameField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
