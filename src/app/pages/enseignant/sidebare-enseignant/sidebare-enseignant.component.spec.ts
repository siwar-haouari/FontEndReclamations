import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebareEnseignantComponent } from './sidebare-enseignant.component';

describe('SidebareEnseignantComponent', () => {
  let component: SidebareEnseignantComponent;
  let fixture: ComponentFixture<SidebareEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebareEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebareEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
