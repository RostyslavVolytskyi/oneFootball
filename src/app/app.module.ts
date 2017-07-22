import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { PlayerComponent } from './player/player.component';

import { DragService } from './drag.service';
import { DraggableDirective } from './draggable.directive';
import { DropTargetDirective } from './drop-target.directive';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    DraggableDirective,
    DropTargetDirective
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DragService],
  bootstrap: [AppComponent]
})
export class AppModule { }
