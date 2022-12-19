import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcuDetailsComponent } from './prodcu-details.component';

describe('ProdcuDetailsComponent', () => {
  let component: ProdcuDetailsComponent;
  let fixture: ComponentFixture<ProdcuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdcuDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdcuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
