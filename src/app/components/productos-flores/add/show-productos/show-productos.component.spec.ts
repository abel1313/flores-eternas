import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductosComponent } from './show-productos.component';

describe('ShowProductosComponent', () => {
  let component: ShowProductosComponent;
  let fixture: ComponentFixture<ShowProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
