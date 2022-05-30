import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterReclamationEComponent } from './ajouter-reclamation-e.component';

describe('AjouterReclamationEComponent', () => {
  let component: AjouterReclamationEComponent;
  let fixture: ComponentFixture<AjouterReclamationEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterReclamationEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterReclamationEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
