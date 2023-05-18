import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPetsComponent } from './lista-pets.component';

describe('ListaPetsComponent', () => {
  let component: ListaPetsComponent;
  let fixture: ComponentFixture<ListaPetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPetsComponent]
    });
    fixture = TestBed.createComponent(ListaPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
