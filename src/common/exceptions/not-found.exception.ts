import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  constructor(error: string) {
    super(error, HttpStatus.NOT_FOUND);
  }
}
