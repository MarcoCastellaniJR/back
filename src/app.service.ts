import { Injectable } from '@nestjs/common';
import { encodePassword } from '../src/Utils/bcrypt'

@Injectable()
export class AppService {
  
  getHello():string {
    return `Senha=`;
  }
  getHello2(): string {
    return 'Hello W2orld!';
  }
}
