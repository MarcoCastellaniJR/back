import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    idUser: number;

    @Column()
    userName: string;

    @Column()
    userPassword: string;

    @Column()
    userAuth: number;

    @Column()
    userEmail: string;
}
