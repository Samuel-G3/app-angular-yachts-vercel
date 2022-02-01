import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SailboatsDetailComponent } from './sailboats-detail.component';

describe('SailboatsDetailComponent', () => {
  let component: SailboatsDetailComponent;
  let fixture: ComponentFixture<SailboatsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SailboatsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SailboatsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
