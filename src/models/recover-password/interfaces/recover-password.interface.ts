import { StatusType } from './status.type';

export interface IRecoverPassword {
  token: number;
  email: string;
  status: StatusType;
  createdAt: Date;
  updatedAt: Date;
}
