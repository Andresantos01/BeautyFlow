import { Injectable } from '@nestjs/common';
import { User } from '../entities/User';

@Injectable()
export class UserPresenter {
  present(user: User): Promise<User> {
    return Promise.resolve(user);
  }
}
