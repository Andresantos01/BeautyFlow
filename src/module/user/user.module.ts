import { Module } from '@nestjs/common';
import { UserController } from './controllers/UserController';
import { CreateUserUseCase } from './useCases/createUser/CreateUserUseCase';
import { UserPresenter } from './presenters/UserPresenter';
import { DatabaseGateway } from './gateways/DatabaseGateway';

@Module({
  controllers: [UserController],
  providers: [CreateUserUseCase, UserPresenter, DatabaseGateway],
})
export class UserModule {}
