import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { HeroesListComponent } from './heroes-list.component';

describe('HeroesListComponent', () => {
  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesListComponent]
    });
    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
