import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroNovoComponent } from './seguro-novo.component';

describe('SeguroNovoComponent', () => {
  let component: SeguroNovoComponent;
  let fixture: ComponentFixture<SeguroNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeguroNovoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguroNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
