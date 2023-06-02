import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from '../../interfaces/UserRepository';
import { User } from '../../entities/User';
import { UserPresenter } from '../../presenters/UserPresenter';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
    private readonly userPresenter: UserPresenter,
  ) {}

  async execute(data: any): Promise<any> {
    const newUser = new User(data);
    const createdUser = await this.userRepository.save(newUser);
    return this.userPresenter.present(createdUser);
  }
}
