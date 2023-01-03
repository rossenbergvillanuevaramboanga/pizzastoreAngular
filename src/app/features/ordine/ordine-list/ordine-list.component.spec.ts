import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdineListComponent } from './ordine-list.component';

describe('OrdineListComponent', () => {
  let component: OrdineListComponent;
  let fixture: ComponentFixture<OrdineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdineListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
