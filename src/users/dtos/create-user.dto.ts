import {
  IsDefined,
  IsEmail,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';
import { FieldLocalizedDto } from '../../shared/dtos/field-localized.dto';
import { Type } from 'class-transformer';

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

  @IsDefined()
  @Type(() => FieldLocalizedDto)
  @ValidateNested()
  readonly country: FieldLocalizedDto;

  @IsString()
  readonly password: string;
}
