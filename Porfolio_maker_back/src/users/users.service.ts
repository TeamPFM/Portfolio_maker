import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  async getUser(): Promise<{ id: number; name: string }> {
    return { id: 1, name: 'name' };
  }
}
