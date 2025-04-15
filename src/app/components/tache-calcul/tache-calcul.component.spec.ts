import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheCalculComponent } from './tache-calcul.component';

describe('TacheCalculComponent', () => {
  let component: TacheCalculComponent;
  let fixture: ComponentFixture<TacheCalculComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TacheCalculComponent]
    });
    fixture = TestBed.createComponent(TacheCalculComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
