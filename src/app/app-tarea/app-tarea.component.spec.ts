import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTareaComponent } from './app-tarea.component';

describe('AppTareaComponent', () => {
  let component: AppTareaComponent;
  let fixture: ComponentFixture<AppTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
