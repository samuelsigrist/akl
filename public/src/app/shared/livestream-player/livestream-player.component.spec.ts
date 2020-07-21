import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestreamPlayerComponent } from './livestream-player.component';

describe('LivestreamPlayerComponent', () => {
  let component: LivestreamPlayerComponent;
  let fixture: ComponentFixture<LivestreamPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivestreamPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestreamPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
