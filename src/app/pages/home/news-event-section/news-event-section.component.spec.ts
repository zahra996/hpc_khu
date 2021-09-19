import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEventSectionComponent } from './news-event-section.component';

describe('NewsEventSectionComponent', () => {
  let component: NewsEventSectionComponent;
  let fixture: ComponentFixture<NewsEventSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsEventSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsEventSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
