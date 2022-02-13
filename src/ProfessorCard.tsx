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
import CheckIcon from '@mui/icons-material/Check';

import { useNavigate } from 'react-router-dom';

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
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    return () => {
      setCopied(false);
    }
  }, [setCopied])

  const closeModal = () => {
    props.closeModal();
    setCopied(false);
  }

  const copyLink = (event: any) => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  };

  return(
    <Dialog open={props.open} scroll="paper" onClose={closeModal} onBackdropClick={closeModal}>
      <DialogTitle>
        {props.professor.name}
        <IconButton
          aria-label="close"
          onClick={closeModal}
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
        <Button onClick={copyLink} disabled={copied} startIcon={copied ? <CheckIcon /> : <LinkIcon />}>{copied ? "Copied" : "Copy Link"}</Button>
      </DialogActions>
    </Dialog>
  );
}

function ProfessorCard(props: ProfessorCardProps){

  const [open, setOpen] = React.useState(props.open);
  let navigate = useNavigate();

  const openDialog = () => {
    window.history.pushState(null, props.professor.name, "/professors/" + props.professor.route);
    setOpen(true);
  };

  const closeDialog = React.useCallback(() => {
    navigate("../professors", {replace: true})
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
        {/* {open ? <ProfessorCardModal professor={props.professor} open={true} closeModal={closeDialog} /> : null} */}
        <ProfessorCardModal professor={props.professor} open={open} closeModal={closeDialog} />
    </div>
  );
}

export default ProfessorCard;