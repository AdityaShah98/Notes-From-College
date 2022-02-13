import * as React from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { TransitionProps } from '@mui/material/transitions';

import aboutus from './img/about_us.jpg';
import { useLocation } from "react-router-dom";

type AboutModalProps = {
    open: boolean;
    closeModal: any;
};

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function AboutModal(props: AboutModalProps) {
    const closeButton = (
        <IconButton
          aria-label="close"
          onClick={props.closeModal}
          sx={{
            float: "right",
            right: 8,
            top: 8
          }}
        >
          <CloseIcon />
        </IconButton>
    );

    return(
    <Dialog
        fullScreen
        open={props.open}
        onClose={props.closeModal}
        TransitionComponent={Transition}>
        <Container maxWidth="md">
            {closeButton}
            <Container maxWidth="sm" sx={{my: 2}}>
                <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                >
                The Story
                </Typography>
                <img src={aboutus} width="100%"/>
            </Container>
            <Typography variant="body1" align="center" color="text.primary" paragraph>
            Morgan and Aditya graduated from Univeristy of Southern California. Following graduation, Morgan started flipping through notebook after notebook of notes from informational interviews, guest speakers, and class. Wanting to share some of what she’s learned...  Or could go in the route of bios. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        </Container>
    </Dialog>);
};

function AboutButton() {
    let location = useLocation();
    const [open, setOpen] = React.useState(location.pathname == "/about");

    const openModal = () => {
        window.history.pushState(null, "Notes from College - About", "/about");
        setOpen(true);
    };

    const closeModal = () => {
        window.history.pushState(null, "Notes from College", "/professors");
        setOpen(false);
    };

    return(
        <div>
             <IconButton onClick={openModal}><HelpOutlineIcon sx={{ fontSize: 28 }}/></IconButton>
             <AboutModal open={open} closeModal={closeModal}></AboutModal>
        </div>
    );
};

export default AboutButton;