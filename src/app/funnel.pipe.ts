import { Pipe, PipeTransform } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'funnel',
  pure: false
})
export class FunnelPipe implements PipeTransform {

  transform(input: any, operand, money) {

    if (input) {
      if (money === undefined) {
        return input;
      } else if (operand === 'greaterThan') {
        return input.filter(function(project) {
          return project.goal >= money;
        });
      } else if (operand === 'lessThan') {
        return input.filter(function(project) {
          return project.goal <= money;
        });
      } else {
        return input;
      }
    }
  }
}
