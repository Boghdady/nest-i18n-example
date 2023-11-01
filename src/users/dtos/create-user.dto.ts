import { IsEmail, IsString, Length } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export class CreateUserDto {
  @IsString()
  @Length(3, 20, {
    message: i18nValidationMessage('validation.USERNAME_LENGTH'),
  })
  readonly username: string;

  @IsEmail(
    {},
    { message: i18nValidationMessage('validation.EMAIL_NOT_FORMATTED') },
  )
  readonly email: string;

  @IsString()
  readonly country: string;

  @IsString()
  readonly password: string;
}
