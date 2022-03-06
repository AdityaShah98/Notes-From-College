import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProfessorCard from './ProfessorCard';

// Image Imports
import abby from './img/Abby_Fifer_Mandell.png';
import adlai from './img/Adlai_Wertman.png';
import alicia from './img/Alicia_Keys.png';
import brie from './img/Brie_Larson.png';
import cara from './img/Cara_Esposito.png';
import carmen from './img/Carmen_Lee.png';
import chimamanda from './img/Chimamanda_Ngozi_Adiche.png';
import alissa from './img/Dr_Alissa_Richardson.png';
import stacy from './img/Dr_Stacy_L_Smith.png';
import rena from './img/Rena_Ronson.png';
import shabnam from './img/Shabnam_Mogharadi.png';
import shilla from './img/Shilla_Kim-Parker.png';
import Typography from '@mui/material/Typography';

import { Link, useParams } from "react-router-dom";

type CardGridProps = {
    searchQuery: string;
};

export type Professor = {
    name: string;
    image: string;
    description: string;
    quotes?: string[];
    route: string;
};

const professors: Professor[] = [
  {name: "Adlai Wertman", route: "AdlaiWertman", image: adlai, description: "\"I dare you to get bored and take the time to find a head heart balance. Get quiet.\""},
  {name: "Alicia Keys", route: "AliciaKeys", image: alicia, description: "\"Hollywood is glamorous in the way that all facades are.\""},
  {name: "Abby Fifer Mandell", route: "AbbyFiferMandell", image: abby, description: "\"Giving ourselves criteria is often what we need to give ourselves options.\"\n\n\"So you want to be an entrepreneur? Go to soul cycle or try rock climbing first.\""},
  {name: "Brie Larson", route: "BrieLarson", image: brie, description: "Brie’s decision to go into acting was all based on a gut instinct at 6. She shared with the class that everyone is called to a path, one you discover by following those \"I've got to do that\" moments. You’ll find out why later.\n\nShe pushed us asking, \"What does it look like to live up to your potential?\"\n\n\"Be interested in your life. Question everything and collect the data.\""},
  {name: "Cara Esposito", route: "CaraEsposito", image: cara, description: "todo"},
  {name: "Carmen Lee", route: "CarmenLee", image: carmen, description: "todo"},
  {name: "Chimamanda Ngozi Adiche", route: "ChimamandaNgoziAdiche", image: chimamanda, description: "todo"},
  {name: "Dr. Alissa Richardson", route: "DrAlissaRichardson", image: alissa, description: "todo"},
  {name: "Dr. Stacy L. Smith", route: "DrStacyLSmith", image: stacy, description: "\"Find what you love and become an expert on it\""},
  {name: "Rena Ronson", route: "RenaRonson", image: rena, description: "I met Rena near the beginning of my time at USC, a season of personal transition and uncertainty about what major to pursue. She encouraged me that one’s major doesn’t really matter as much as your ability to learn as you go. Even after only meeting with me once, she introduced me to several others in entertainment. I left our conversation feeling empowered and encouraged by her warm presence."},
  {name: "Shabnam Mogharadi", route: "ShabnamMogharadi", image: shabnam, description: "\"Few things have the power like religion.\"\n\nAdvice to undergrads:\n Do a semester abroad\nDo as many internships from as many different sides within your field of interest as possible\nLearn hard, specific, tactile skills; the soft you can learn later"},
  {name: "Shilla Kim-Parker", route: "ShillaKim-Parker", image: shilla, description: "Advice for a college grad: \"Just experiment with so many things.\"\n\nAt the time we met, Shilla was working on Thrilling on the side and was a Chief of Staff at Disney. In her experience, it’s a dream job if you work well with the executive; her boss brought her with them, making her their right hand, allowing her to work on HR, creative, and communications. I introduced Shilla to my high school friend who now works for her. I asked Kenzie about what she’s learned from Shilla: \"One of my favorite things that she’s taught me is how to lead with kindness and how important it is to actually listen to people when they bring up issues and then follow through with a solution. She is an exceptional boss and human.\""}
];


function CardGrid(props: CardGridProps) {
    let params = useParams();
    
    var filteredProfessors = professors.filter(function(professor){
        return professor.name
        .toLowerCase()
        .replace(/\s/g,'')
        .includes(
            props.searchQuery
            .toLowerCase()
            .replace(/\s/g,'')
        )
    });
    //TODO: if filteredProfessors.length render grid, else render "no professor match" snippet
    return(
      <Container sx={{ py: 6 }} maxWidth="md">
        {props.searchQuery ?
            <Typography
            variant="body1"
            // align="left"
            color="text.secondary"
            gutterBottom
            >
            Showing Search Results for "{props.searchQuery}":
            </Typography> 
        : null}
        <Grid container spacing={4}>
          {filteredProfessors.map((professor) => (
            <Grid item xs={6} sm={4} md={4} key={professor.route}>
                {/* <Link to={'/professors/'+professor.route} style={{ textDecoration: 'none' }}> */}
                    <ProfessorCard professor={professor} open={professor.route == params.professorId}/>
                {/* </Link> */}
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

export default CardGrid;