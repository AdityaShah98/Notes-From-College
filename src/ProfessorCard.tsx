import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Professor } from './CardGrid';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import LinkIcon from '@mui/icons-material/Link';

type ProfessorCardProps = {
  professor: Professor;
  open: boolean;
};

type ProfessorCardModalProps = {
  professor: Professor;
  open: boolean;  
  closeModal: any;
};

function ProfessorCardModal(props: ProfessorCardModalProps){
  const copyLink = () => {

  };

  return(
    <Dialog open={props.open} scroll="paper" onClose={props.closeModal} onBackdropClick={props.closeModal}>
      <DialogTitle>
        {props.professor.name}
        <IconButton
          aria-label="close"
          onClick={props.closeModal}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers={true}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <img src={props.professor.image} width={"100%"} loading="lazy"/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{height: "300px", background: '#FFFFFF'}}>
              <DialogContentText variant="body1" style=
                {{height:'100%',
                paddingRight:'10px',
                overflowY: 'scroll',
                whiteSpace: 'pre-line'}}>
                {props.professor.description}
              </DialogContentText>
            </div>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.closeModal}>Copy Link <LinkIcon /></Button>
        <Button onClick={props.closeModal}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

function ProfessorCard(props: ProfessorCardProps){

  const [open, setOpen] = React.useState(props.open);

  const openDialog = () => {
    window.history.pushState(null, props.professor.name, "/professors/" + props.professor.route);
    setOpen(true);
  };

  const closeDialog = React.useCallback(() => {
    window.history.pushState(null, "Notes from College", "/professors");
    setOpen(false);
  },
  [setOpen]);

  return(
    <div>
        <Card>
          <CardActionArea onClick={openDialog}>
            <CardMedia
              component="img"
              sx={{
                pt: '10%',
              }}
              src={props.professor.image}
              alt={props.professor.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.professor.name}
              </Typography>
              <Typography variant="body2">
                {props.professor.description.substring(0,56) + "..."}
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* <CardActions>
            <Button size="small" onClick={openDialog}>View</Button>
            <Button size="small">Share</Button>
          </CardActions> */}
        </Card>
        <ProfessorCardModal professor={props.professor} open={open} closeModal={closeDialog} />
    </div>
  );
}

export default ProfessorCard;