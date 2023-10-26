import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Note } from "src/notes/Note.entity";
import { Repository } from "typeorm";

@Injectable()
export class NotesServices {
    constructor(
        @InjectRepository(Note) private notesRepository: Repository<Note>,
    ) {}

    async getNotes(): Promise<Note[]> {
        return await this.notesRepository.find();
    }

    async findOne(noteid: number): Promise<Note> {
        return  this.notesRepository.findOne({where: {noteid}});
    }

    async createNote(note: Note) {
        this.notesRepository.save(note);
    }

    async deleteNote(noteid: number): Promise<void> {
        await this.notesRepository.delete(noteid);
    }

    async editNote(noteid: number, note: Note): Promise<Note>{
        const editedNote = this.notesRepository.findOne({where: {noteid}});
        if (!editedNote) {
            throw new NotFoundException('Note is not found');
        }
        (await editedNote).description = note.description;
        (await editedNote).title = note.title;
        await (await editedNote).save();
        console.log('From service:',editedNote);
        return editedNote;
    } 

}