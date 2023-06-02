import { Injectable } from '@nestjs/common';
import { UserRepository } from '../interfaces/UserRepository';
import { User } from '../entities/User';

@Injectable()
export class DatabaseGateway implements UserRepository {
  save(user: User): Promise<User> {
    // Implemente a lógica para salvar o usuário no banco de dados aqui
    return Promise.resolve(user);
  }
}
