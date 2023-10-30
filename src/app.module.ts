import { Module, ValidationPipe } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, MongoModule],
  providers: [],
})
export class AppModule {}
