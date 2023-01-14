import { HttpCustomMessages } from '../../common/helpers/exceptions/messages/index.messages';
import { HttpException, HttpStatus } from '@nestjs/common';

export class TokenInvalidException extends HttpException {
  constructor() {
    super(HttpCustomMessages.RECOVER.TOKEN.INVALID, HttpStatus.FORBIDDEN);
  }
}
