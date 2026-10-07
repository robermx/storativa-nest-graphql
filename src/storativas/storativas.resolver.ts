import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StorativasService } from './storativas.service.js';
import { Storativa } from './entities/storativa.entity.js';
import { CreateStorativaInput } from './dto/create-storativa.input.js';
import { UpdateStorativaInput } from './dto/update-storativa.input.js';

@Resolver(() => Storativa)
export class StorativasResolver {
  constructor(private readonly storativasService: StorativasService) {}

  @Mutation(() => Storativa)
  createStorativa(@Args('createStorativaInput') createStorativaInput: CreateStorativaInput) {
    return this.storativasService.create(createStorativaInput);
  }

  @Query(() => [Storativa], { name: 'storativas' })
  findAll() {
    return this.storativasService.findAll();
  }

  @Query(() => Storativa, { name: 'storativa' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.storativasService.findOne(id);
  }

  @Mutation(() => Storativa)
  updateStorativa(@Args('updateStorativaInput') updateStorativaInput: UpdateStorativaInput) {
    return this.storativasService.update(updateStorativaInput.id, updateStorativaInput);
  }

  @Mutation(() => Storativa)
  removeStorativa(@Args('id', { type: () => Int }) id: number) {
    return this.storativasService.remove(id);
  }
}
