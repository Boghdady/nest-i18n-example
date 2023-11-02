import { IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class FieldLocalizedDto {
  @Transform(({ value }) => {
    return value.toString().trim();
  })
  @IsNotEmpty()
  @IsString()
  ar: string;

  @Transform(({ value }) => {
    return value.toString().trim();
  })
  @IsNotEmpty()
  @IsString()
  en: string;
}
