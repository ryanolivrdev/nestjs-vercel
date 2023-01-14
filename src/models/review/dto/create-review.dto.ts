import { HttpCustomMessages } from '../../../common/helpers/exceptions/messages/index.messages';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min
} from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.REVIEW.GRADE.REQUIRED })
  @IsNumber(
    { maxDecimalPlaces: 1 },
    { message: HttpCustomMessages.VALIDATION.REVIEW.GRADE.INVALID }
  )
  @Min(0, { message: HttpCustomMessages.VALIDATION.REVIEW.GRADE.REQUIRED })
  @Max(5, { message: HttpCustomMessages.VALIDATION.REVIEW.GRADE.REQUIRED })
  grade: number;

  @IsNotEmpty({
    message: HttpCustomMessages.VALIDATION.REVIEW.COMMENT.REQUIRED
  })
  @IsString({ message: HttpCustomMessages.VALIDATION.REVIEW.COMMENT.INVALID })
  @MaxLength(125, {
    message: HttpCustomMessages.VALIDATION.REVIEW.COMMENT.LENGTH
  })
  comment: string;

  // @IsNotEmpty()
  // @IsString()
  // establishmentId: string
}
