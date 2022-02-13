import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotebookBackground from './img/notebook_yellow_landscape.jpg';

function HeroUnit() {
    return(
      <Box
        sx={{
        //   bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
          boxShadow: 4
        }}
        style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), url(${NotebookBackground})`,
        backgroundPosition: "left top",
        backgroundSize: "100% auto"
        }}
      >
        <Container maxWidth="sm"
        // sx={{boxShadow: 10}}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome!
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            This is a collection of our college notes. Some are truisms backed by the
            life of the spearker. Some are academic theories. Some are inspired doodles.
          </Typography>
          {/* <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Main call to action</Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack> */}
          <Box display="flex"
            justifyContent="center"
            alignItems="center">
            <KeyboardArrowDownIcon fontSize="large" />
          </Box>
        </Container>
      </Box>
    );
}

export default HeroUnit;