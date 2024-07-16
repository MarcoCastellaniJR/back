import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { SalesModule } from './sales/sales.module';
import { EngineerModule } from './engineer/engineer.module';
import { ProductionModule } from './production/production.module';
import { DeliveryModule } from './delivery/delivery.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './clients/entities/client.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [Client,User],
        synchronize: true, // Desativar em produção
      }),
      inject: [ConfigService],
    }),
    ClientsModule,SalesModule,EngineerModule,ProductionModule,DeliveryModule, UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
