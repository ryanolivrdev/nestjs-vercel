import { HttpCustomMessages } from '../../common/helpers/exceptions/messages/index.messages';
import { HttpException, HttpStatus } from '@nestjs/common';

export class RecoverException extends HttpException {
  constructor(error: string) {
    super(error, HttpStatus.FORBIDDEN);
  }
}
