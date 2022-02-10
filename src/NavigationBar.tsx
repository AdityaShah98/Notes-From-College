import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AboutButton from './About';

import InputBase from '@mui/material/InputBase';

import { ReactComponent as Logo } from './img/NFClogo-cropped.svg';
import { Box } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    color: theme.palette.grey[600],
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.grey[500], 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.grey[500], 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

type SearchBarProps = {
    setSearchQuery: any;
};

type NavigationBarProps = {
    setSearchQuery: any;
};

function SearchBar(props: SearchBarProps) {
    return(
        <Search sx={{display: {xs: 'none', sm: 'block'}, mx: 1}}>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event)=>{props.setSearchQuery(event.target.value);}}
            />
            {/* <TextField onChange={(event)=>{props.setSearchQuery(event.target.value);}} /> */}
        </Search>
    );
};

export default function NavigationBar(props: NavigationBarProps) {
    return(
        <AppBar position="sticky" style={{ background: 'white'}}>
            <Container maxWidth="md" disableGutters>
                <Toolbar style={{display:"flex", justifyContent:"space-between"}}>
                    {/* TODO: navbar formatting with flexGrow:0 and flexGrow: 1 */}
                    <Box sx={{ flexGrow: 1 }}>
                        <Logo title="Notes From College" style={{maxWidth: 400}} />
                    </Box>
                    <SearchBar setSearchQuery={props.setSearchQuery} />
                    <AboutButton />
                </Toolbar>
            </Container>
        </AppBar>
      );
}
