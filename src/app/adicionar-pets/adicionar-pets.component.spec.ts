import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPetsComponent } from './adicionar-pets.component';

describe('AdicionarPetsComponent', () => {
  let component: AdicionarPetsComponent;
  let fixture: ComponentFixture<AdicionarPetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarPetsComponent]
    });
    fixture = TestBed.createComponent(AdicionarPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
