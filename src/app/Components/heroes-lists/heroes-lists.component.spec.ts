import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListsComponent } from './heroes-lists.component';

describe('HeroesListsComponent', () => {
  let component: HeroesListsComponent;
  let fixture: ComponentFixture<HeroesListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
