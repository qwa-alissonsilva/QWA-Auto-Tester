import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndossoInclusaoComponent } from './endosso-inclusao.component';

describe('EndossoInclusaoComponent', () => {
  let component: EndossoInclusaoComponent;
  let fixture: ComponentFixture<EndossoInclusaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndossoInclusaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndossoInclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
