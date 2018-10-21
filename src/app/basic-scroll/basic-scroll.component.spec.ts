import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicScrollComponent } from './basic-scroll.component';

describe('BasicScrollComponent', () => {
  let component: BasicScrollComponent;
  let fixture: ComponentFixture<BasicScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
