import { EstablishmentService } from '../../models/establishment/establishment.service';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from '../../models/user/user.service';

@Injectable()
export class SuggestionService {
  constructor(
    private readonly userService: UserService,
    private readonly establishmentService: EstablishmentService
  ) {}

  async generateUserSuggestions(id: string) {
    const user = await this.userService.findOneOrFail({ where: { id } });
    const establishments =
      await this.establishmentService.findByAccessibilities(
        user.accessibilities
      );
    return establishments;
  }
}
