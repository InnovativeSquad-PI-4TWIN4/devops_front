import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheFormComponent } from './tache-form.component';

describe('TacheFormComponent', () => {
  let component: TacheFormComponent;
  let fixture: ComponentFixture<TacheFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TacheFormComponent]
    });
    fixture = TestBed.createComponent(TacheFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
