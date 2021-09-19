
import * as React from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function CardPost({ index, text }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {index + 1}.
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Тема поста: JavaScript
            </Typography>
            {/* <Typography variant="h5" component="div">
              {index} JavaScript
            </Typography> */}
            {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography> */}
            <Typography variant="body2">
              {text}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Редактировать</Button>
            <Button size="small">Удалить</Button>
          </CardActions>
        </React.Fragment>

      </Card>
    </Box>
  );
}
export default CardPost
