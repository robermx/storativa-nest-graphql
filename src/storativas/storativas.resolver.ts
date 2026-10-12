import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { ParseObjectIdPipe } from '@nestjs/mongoose';

import { StorativasService } from './storativas.service.js';
import { Storativa } from './entities/storativa.entity.js';
import { CreateStorativaInput, UpdateStorativaInput } from './dto/index.js';

@Resolver(() => Storativa)
export class StorativasResolver {
  constructor(private readonly storativasService: StorativasService) {}

  @Mutation(() => Storativa)
  async createStorativa(
    @Args('createStorativaInput') createStorativaInput: CreateStorativaInput,
  ): Promise<Storativa> {
    return this.storativasService.create(createStorativaInput);
  }

  @Query(() => [Storativa], { name: 'storativas' })
  async findAll(): Promise<Storativa[]> {
    return this.storativasService.findAll();
  }

  @Query(() => Storativa, { name: 'storativa' })
  async findOne(
    @Args('id', { type: () => ID }, ParseObjectIdPipe) id: string,
  ): Promise<Storativa> {
    return this.storativasService.findOne(id);
  }

  @Mutation(() => Storativa)
  async updateStorativa(
    @Args('updateStorativaInput') updateStorativaInput: UpdateStorativaInput,
  ): Promise<Storativa> {
    return this.storativasService.update(
      updateStorativaInput.id,
      updateStorativaInput,
    );
  }

  @Mutation(() => Storativa)
  async removeStorativa(
    @Args('id', { type: () => ID }, ParseObjectIdPipe) id: string,
  ): Promise<Storativa> {
    return this.storativasService.remove(id);
  }
}
