import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocServiceComponent } from './poc-service.component';

describe('PocServiceComponent', () => {
  let component: PocServiceComponent;
  let fixture: ComponentFixture<PocServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
