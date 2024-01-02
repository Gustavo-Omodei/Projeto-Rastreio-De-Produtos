import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RastreiosComponent } from './rastreios.component';

describe('RastreiosComponent', () => {
  let component: RastreiosComponent;
  let fixture: ComponentFixture<RastreiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RastreiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RastreiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
