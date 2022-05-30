import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReclamationPedagogiqueEComponent } from './liste-reclamation-pedagogique-e.component';

describe('ListeReclamationPedagogiqueEComponent', () => {
  let component: ListeReclamationPedagogiqueEComponent;
  let fixture: ComponentFixture<ListeReclamationPedagogiqueEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeReclamationPedagogiqueEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeReclamationPedagogiqueEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
