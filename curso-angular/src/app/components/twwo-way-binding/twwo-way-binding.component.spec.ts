import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwwoWayBindingComponent } from './twwo-way-binding.component';

describe('TwwoWayBindingComponent', () => {
  let component: TwwoWayBindingComponent;
  let fixture: ComponentFixture<TwwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwwoWayBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
