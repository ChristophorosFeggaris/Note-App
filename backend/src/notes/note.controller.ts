import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { Note } from 'src/notes/Note.entity';
import { NotesServices } from 'src/notes/notes.service';
  
  
@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesServices) {}
  
    @Get()
    async findAll() {
      return await this.notesService.getNotes();
    }
  
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) noteid: number) {
      return await this.notesService.findOne(noteid);
    }
  
    @Post() 
    async create(@Body() note: Note) {
      return await this.notesService.createNote(note);
    }
  
    @Patch(':id')
    async editNote(@Body() note: Note, @Param('id') noteid: number): Promise<Note> {
      const noteEdited = await this.notesService.editNote(noteid, note);
      return noteEdited;
    }
  
    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) noteid: number) {
      await this.notesService.deleteNote(noteid);
    }
  }