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
  		number: 7,
      age: '28',
      birthDate: '27-10-1988',
      country: 'Ukraine',
      height: 173,
      id: '23',
      name: 'Rostyslav Volytskyi',
      thumbnailSrc: './src/img/...',
      weight: 71
  	},
    playerId: '23'
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

  it('should disappear "img" tag after we have playerInfo data', () => {
    component.playerInfo = undefined;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('img'));
    expect(de).toBe(null);
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
