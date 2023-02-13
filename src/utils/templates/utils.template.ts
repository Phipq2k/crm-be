import { ValidationError } from '@nestjs/common';

export class Ultils {
  static getMessageValidator(errors: ValidationError[]) {
    return errors
      .map((item) => {
        return Object.keys(item.constraints)
          .map((obj) => item.constraints[obj])
          .join(',');
      })
      .join(',');
  }
}
