import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../useCases/createUser/CreateUserUseCase';

@Controller('user')
export class UserController {
  constructor(private readonly createUserCase: CreateUserUseCase) {}

  @Post()
  createUser(@Body() data: any) {
    return this.createUserCase.execute(data);
  }
}
