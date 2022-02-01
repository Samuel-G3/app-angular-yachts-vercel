import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatsDetailComponent } from './boats-detail.component';

describe('BoatsDetailComponent', () => {
  let component: BoatsDetailComponent;
  let fixture: ComponentFixture<BoatsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
