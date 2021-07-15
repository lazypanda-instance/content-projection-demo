import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeShareUiComponent } from './like-share-ui.component';

describe('LikeShareUiComponent', () => {
  let component: LikeShareUiComponent;
  let fixture: ComponentFixture<LikeShareUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeShareUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeShareUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
