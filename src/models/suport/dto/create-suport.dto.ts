import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSuportDto {
  @IsString({ message: 'A mensagem deve ser um texto.' })
  @IsNotEmpty({ message: 'A mensagem é obrigatória.' })
  message: string;

  @IsString({ message: 'O assunto deve ser um texto.' })
  @IsNotEmpty({ message: 'O assunto é obrigatório.' })
  subject: string;

  @IsString({ message: 'O titulo deve ser um texto.' })
  @IsNotEmpty({ message: 'O titulo é obrigatório.' })
  title: string;

  @IsString({ message: 'O subtitulo deve ser um texto.' })
  @IsNotEmpty({ message: 'O subtitulo é obrigatório.' })
  subtitle: string;
}
