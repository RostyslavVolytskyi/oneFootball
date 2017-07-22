import { DropTargetDirective } from './drop-target.directive';
import { DragService } from '../services/drag.service';

describe('DropTargetDirective', () => {
  it('should create an instance', () => {
    const directive = new DropTargetDirective(new DragService());
    expect(directive).toBeTruthy();
  });
});
