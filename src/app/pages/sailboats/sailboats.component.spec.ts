import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SailboatsComponent } from './sailboats.component';

describe('SailboatsComponent', () => {
  let component: SailboatsComponent;
  let fixture: ComponentFixture<SailboatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SailboatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SailboatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
