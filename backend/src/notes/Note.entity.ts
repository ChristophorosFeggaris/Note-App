import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, MaxLength, MinLength } from 'class-validator';

@Entity({name: 'note'})
export class Note extends BaseEntity {
  @PrimaryGeneratedColumn()
  noteid: number;

  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  title: string;

  @Column()
  @MinLength(1)
  @IsString()
  description: string;
}