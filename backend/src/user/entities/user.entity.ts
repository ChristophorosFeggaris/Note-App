import { IsEmail, IsNumber, IsPhoneNumber, IsString } from "class-validator";
import { Note } from "src/notes/Note.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'user'})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    userid: number;

    @Column()
    @IsString()
    firstname: string;

    @Column()
    @IsString()
    lastname: string;

    @Column()
    @IsString()
    username: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    @IsString()
    password: string;

    @Column()
    @IsPhoneNumber()
    phoneNumber: string;

    @OneToMany(() => Note, (note) => note.user)
    notes: Note[];



    

}
