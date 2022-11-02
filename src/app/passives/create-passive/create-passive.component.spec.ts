import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePassiveComponent } from './create-passive.component';

describe('CreatePassiveComponent', () => {
  let component: CreatePassiveComponent;
  let fixture: ComponentFixture<CreatePassiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePassiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePassiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
