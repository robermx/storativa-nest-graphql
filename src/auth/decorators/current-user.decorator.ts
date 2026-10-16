import {
  createParamDecorator,
  ExecutionContext,
  ForbiddenException,
  InternalServerErrorException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { User } from '../../users/entities/user.entity.js';
import { ValidRoles } from '../enums/valid-roles.enum.js';
import { capitalizeFullName } from '../../common/helpers/capitalize-full-name.js';

export const CurrentUser = createParamDecorator(
  (roles: ValidRoles[] = [], context: ExecutionContext) => {
    console.log({ roles });
    const ctx = GqlExecutionContext.create(context);
    const user: User = ctx.getContext().req.user;
    if (!user)
      throw new InternalServerErrorException(
        'There is not user inside the request',
      );
    if (Object.keys(roles).length === 0) return user;

    for (const role of user.roles) {
      // TODO: delete validRoles
      if (roles.includes(role as ValidRoles)) {
        return user;
      }
    }

    throw new ForbiddenException(
      `User: ${capitalizeFullName(user.fullName)} needs a valid role [${roles}]`,
    );
  },
);
