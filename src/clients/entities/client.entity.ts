import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, Generated } from "typeorm";

@Entity()
export class Client {
    @Generated()
    id: number;

    @PrimaryColumn()
    clientCpf: string;

    @Column()
    clientName: string;

    @Column()
    clientEmail: string;

    

}
