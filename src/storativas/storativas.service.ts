import { Injectable } from '@nestjs/common';
import { CreateStorativaInput } from './dto/create-storativa.input.js';
import { UpdateStorativaInput } from './dto/update-storativa.input.js';

@Injectable()
export class StorativasService {
  create(createStorativaInput: CreateStorativaInput) {
    return 'This action adds a new storativa';
  }

  findAll() {
    return [];
  }

  findOne(id: number) {
    return `This action returns a #${id} storativa`;
  }

  update(id: number, updateStorativaInput: UpdateStorativaInput) {
    return `This action updates a #${id} storativa`;
  }

  remove(id: number) {
    return `This action removes a #${id} storativa`;
  }
}
