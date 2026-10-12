import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Storativa } from './entities/storativa.entity.js';
import { CreateStorativaInput, UpdateStorativaInput } from './dto/index.js';

@Injectable()
export class StorativasService {
  constructor(
    @InjectModel(Storativa.name)
    private storativaModel: Model<Storativa>,
  ) {}

  idNotFound(id: string) {
    return new NotFoundException(`Storativa with id: ${id} not found`);
  }

  async create(createStorativaInput: CreateStorativaInput): Promise<Storativa> {
    return await this.storativaModel.create(createStorativaInput);
  }

  async findAll(): Promise<Storativa[]> {
    // TODO by user, paginate, filter
    return this.storativaModel.find().exec();
  }

  async findOne(id: string): Promise<Storativa> {
    const storativa = await this.storativaModel.findById({ _id: id }).exec();

    if (!storativa) throw this.idNotFound(id);
    return storativa;
  }

  async update(
    id: string,
    updateStorativaInput: UpdateStorativaInput,
  ): Promise<Storativa> {
    const storativa = await this.storativaModel
      .findByIdAndUpdate({ _id: id }, updateStorativaInput, {
        returnDocument: 'after',
      })
      .exec();
    if (!storativa) throw this.idNotFound(id);
    return storativa;
  }

  async remove(id: string): Promise<Storativa> {
    const storativa = await this.storativaModel
      .findByIdAndDelete({ _id: id })
      .exec();
    if (!storativa) throw this.idNotFound(id);
    return storativa;
  }
}
