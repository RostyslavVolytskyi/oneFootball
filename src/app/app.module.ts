import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayerTableComponent } from './player-table/player-table.component';
import { FieldComponent } from './field/field.component';
import { PlayerComponent } from './player/player.component';

import { DragService } from './shared/services/drag.service';
import { DraggableDirective } from './shared/directives/draggable.directive';
import { DropTargetDirective } from './shared/directives/drop-target.directive';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    DraggableDirective,
    DropTargetDirective,
    PlayerTableComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DragService],
  bootstrap: [AppComponent]
})
export class AppModule { }
