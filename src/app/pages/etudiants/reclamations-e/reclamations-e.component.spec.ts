import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationsEComponent } from './reclamations-e.component';

describe('ReclamationsEComponent', () => {
  let component: ReclamationsEComponent;
  let fixture: ComponentFixture<ReclamationsEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationsEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationsEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
