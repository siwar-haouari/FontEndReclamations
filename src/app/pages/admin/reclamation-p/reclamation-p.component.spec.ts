import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationPComponent } from './reclamation-p.component';

describe('ReclamationPComponent', () => {
  let component: ReclamationPComponent;
  let fixture: ComponentFixture<ReclamationPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
