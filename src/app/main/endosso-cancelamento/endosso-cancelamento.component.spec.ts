import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndossoCancelamentoComponent } from './endosso-cancelamento.component';

describe('EndossoCancelamentoComponent', () => {
  let component: EndossoCancelamentoComponent;
  let fixture: ComponentFixture<EndossoCancelamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndossoCancelamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndossoCancelamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
