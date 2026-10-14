import {
  BadRequestException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CatchError } from '../interfaces/catch-error.interface.js';

export const handleException = (error: CatchError, from: string = 'error'): never => {
  const logger = new Logger(from);
  if (error.code === 11000) {
    throw new BadRequestException(error.errorResponse.errmsg);
  }
  logger.error(error);
  throw new InternalServerErrorException(`Unexpected error, check logs`);
};
