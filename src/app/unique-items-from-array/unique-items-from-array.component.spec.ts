import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueItemsFromArrayComponent } from './unique-items-from-array.component';

describe('UniqueItemsFromArrayComponent', () => {
  let component: UniqueItemsFromArrayComponent;
  let fixture: ComponentFixture<UniqueItemsFromArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueItemsFromArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueItemsFromArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
