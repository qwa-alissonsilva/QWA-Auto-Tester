import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndossoExclusaoComponent } from './endosso-exclusao.component';

describe('EndossoExclusaoComponent', () => {
  let component: EndossoExclusaoComponent;
  let fixture: ComponentFixture<EndossoExclusaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndossoExclusaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndossoExclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
