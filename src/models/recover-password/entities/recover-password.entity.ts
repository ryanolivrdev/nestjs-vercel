import { StatusType } from './../interfaces/status.type';
import { generateRandomDigits } from './../../../utils/generateRandomDigits.util';
import { IRecoverPassword } from './../interfaces/recover-password.interface';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'recover_passwords' })
export class RecoverPasswordEntity implements IRecoverPassword {
  @Column({ nullable: true, update: false })
  token: number;

  @PrimaryColumn({ update: false })
  email: string;

  @Column({ default: 'PENDING', insert: false, nullable: true })
  status: StatusType;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @BeforeInsert()
  defaultValues() {
    this.token = generateRandomDigits(0, 9999999);
  }
}
