import { UserModule } from '../../models/user/user.module';
import { forwardRef, Module } from '@nestjs/common';
import { EstablishmentModule } from '../../models/establishment/establishment.module';
import { SuggestionService } from './suggestion.service';

@Module({
  imports: [
    forwardRef(() => EstablishmentModule),
    forwardRef(() => UserModule)
  ],
  providers: [SuggestionService],
  exports: [SuggestionService]
})
export class SuggestionModule {}
