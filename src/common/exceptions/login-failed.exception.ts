import { HttpCustomMessages } from './../helpers/exceptions/messages/index.messages';
import { HttpException, HttpStatus } from '@nestjs/common';

export class LoginFailedException extends HttpException {
  constructor() {
    super(
      HttpCustomMessages.AUTHORIZATION.LOGIN_FAILED,
      HttpStatus.UNAUTHORIZED
    );
  }
}
