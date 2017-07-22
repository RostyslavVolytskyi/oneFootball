import { DraggableDirective } from './draggable.directive';
import { DragService } from '../services/drag.service';

describe('DraggableDirective', () => {
  it('should create an instance', () => {
    const directive = new DraggableDirective(new DragService());
    expect(directive).toBeTruthy();
  });
});
