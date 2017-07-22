import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { PlayerComponent } from './player.component';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  const playerInfoMock = {
  	data: {
  		firstName: 'Rostyslav',
  		lastName: 'Volytskyi',
  		position: 'forward',
  		number: '7'
  	}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('.icon'));
  	el = de.nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should exist elemene with icon class', () => {
    expect(el).toBeTruthy();
  });

  xit('should appear "img" tag after we have playerInfo data', () => {
    expect(el.style.backgroundColor).toBe('blue');
  });

  it('should appear "img" tag after we have playerInfo data', () => {
  	component.playerInfo = playerInfoMock;
  	fixture.detectChanges();
  	de = fixture.debugElement.query(By.css('img'));
  	el = de.nativeElement;
    expect(el).toBeTruthy();
  });

  it('should display a different player name', () => {
  	component.playerInfo = playerInfoMock;
  	fixture.detectChanges();
  	de = fixture.debugElement.query(By.css('.name'));
  	el = de.nativeElement;
    expect(el.textContent).toContain('Rostyslav Volytskyi');
  });

  it('should display a different player number', () => {
  	component.playerInfo = playerInfoMock;
  	fixture.detectChanges();
  	de = fixture.debugElement.query(By.css('.number'));
  	el = de.nativeElement;
    expect(el.textContent).toContain('7');
  });

  it('should display a different player number', () => {
  	component.playerInfo = playerInfoMock;
  	fixture.detectChanges();
  	de = fixture.debugElement.query(By.css('.position'));
  	el = de.nativeElement;
    expect(el.textContent).toContain('forward');
  });
});
