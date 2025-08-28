import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bcrypt } from './bcrypt';

describe('Bcrypt', () => {
  let component: Bcrypt;
  let fixture: ComponentFixture<Bcrypt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bcrypt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bcrypt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
