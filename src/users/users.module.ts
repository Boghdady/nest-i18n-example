import { UsersController } from './usersController';
import { UserService } from './users.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { CustomI18nService } from '../custom-i18n.service';
import * as mongooseI18n from 'mongoose-i18n-localize';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema;
          schema.plugin(mongooseI18n, {
            locales: ['en', 'ar'],
            defaultLocale: 'en',
          });
          return schema;
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UserService, CustomI18nService],
})
export class UsersModule {}
