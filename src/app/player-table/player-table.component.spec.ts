import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { PlayerTableComponent } from './player-table.component';
import { DraggableDirective } from '../shared/directives/draggable.directive'

describe('PlayerTableComponent', () => {
  let component: PlayerTableComponent;
  let fixture: ComponentFixture<PlayerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    	imports: [ HttpModule ],
      declarations: [ PlayerTableComponent, DraggableDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
