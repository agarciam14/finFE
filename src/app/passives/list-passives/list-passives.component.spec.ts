import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPassivesComponent } from './list-passives.component';

describe('ListPassivesComponent', () => {
  let component: ListPassivesComponent;
  let fixture: ComponentFixture<ListPassivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPassivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPassivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
