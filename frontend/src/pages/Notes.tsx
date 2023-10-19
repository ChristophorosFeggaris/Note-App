import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteCard from '../components/NoteCard';
import { Box, Grid } from '@mui/material';



export function Notes(): JSX.Element {

  const [notes, setNotes] = useState([]);

  const noteUrl = 'http://localhost:3001/notes';

  async function getNotes() {
    try{
      const response: any = await axios.get(noteUrl);
      setNotes(response.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      
      <h1 >Notes Page</h1>
      {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> */}
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
      <div>
        {notes.map((note: any) => (
          // <div key={note.noteid} style={{ marginBottom: '16px' }}>
          <Box key={note.noteid} mb={4}>
          <NoteCard
            noteid={note.noteid}
            title={note.title}
            description={note.description}
          />
          </Box>
        ))}
      </div>
      </Box>
    </div>
  );
};