import { SetMetadata } from '@nestjs/common';

//#region key
export const ResponseMessageKey = 'ResponseMessageKey';
//#endregion

//#region metadata decorator
export const ResponseMessage = (message: string) =>
  SetMetadata(ResponseMessageKey, message);

export const NotAuth = () => SetMetadata('isNotAuth', true);
//#endregion
