import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gums } from './gums';

describe('Gums', () => {
  let component: Gums;
  let fixture: ComponentFixture<Gums>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gums]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gums);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
