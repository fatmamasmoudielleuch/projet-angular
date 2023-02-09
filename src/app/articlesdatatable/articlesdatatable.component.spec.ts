import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesdatatableComponent } from './articlesdatatable.component';

describe('ArticlesdatatableComponent', () => {
  let component: ArticlesdatatableComponent;
  let fixture: ComponentFixture<ArticlesdatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesdatatableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesdatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
