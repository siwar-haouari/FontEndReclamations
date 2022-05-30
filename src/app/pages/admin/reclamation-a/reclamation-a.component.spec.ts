import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationAComponent } from './reclamation-a.component';

describe('ReclamationAComponent', () => {
  let component: ReclamationAComponent;
  let fixture: ComponentFixture<ReclamationAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
