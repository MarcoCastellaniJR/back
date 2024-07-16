import * as bcrypt from 'bcrypt';

export function encodePassword(rawPassword: string){
    const saltOrRounds = 10;
    return bcrypt.hashSync(rawPassword, saltOrRounds);
}

