import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavigationBar from './NavigationBar';
import CardGrid from './CardGrid';
import { useParams, useLocation } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function HeroUnit() {
  return(
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
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

const theme = createTheme();

export default function Album() {
  const [searchQuery, setSearchQuery] = React.useState("");
  let params = useParams();
  let location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationBar setSearchQuery={setSearchQuery}/>
      <main>
        {/* Hero unit */}
        <HeroUnit />
        {/* Grid of Cards */}
        <CardGrid searchQuery={searchQuery} routedProfessor={params.professorId}/>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}