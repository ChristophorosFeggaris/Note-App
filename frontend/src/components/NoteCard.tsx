import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

interface NoteCardProps {
  noteid: number;
  title: string;
  description: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ noteid, title, description }) => {
  return (
    <Card variant="outlined" sx={{ width: 300 }}> 
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};

export default NoteCard;





