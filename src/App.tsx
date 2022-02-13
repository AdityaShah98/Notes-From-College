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
import HeroUnit from './HeroUnit';
import { useParams } from "react-router-dom";
import { ReactComponent as Logo } from './img/NFClogo-cropped.svg';

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

const theme = createTheme();

export default function Album() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationBar setSearchQuery={setSearchQuery}/>
      <main>
        {/* Hero unit */}
        <HeroUnit />
        {/* Grid of Cards */}
        <CardGrid searchQuery={searchQuery}/>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          <Logo title="Notes From College" style={{maxWidth: 300}} />
          <br/>Footer
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