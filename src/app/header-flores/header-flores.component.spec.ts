import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFloresComponent } from './header-flores.component';

describe('HeaderFloresComponent', () => {
  let component: HeaderFloresComponent;
  let fixture: ComponentFixture<HeaderFloresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFloresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderFloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
