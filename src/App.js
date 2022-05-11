import logo from './logo.svg';
import getWords from './settings/words';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import setType from './settings/setwords'
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 120,
  lineHeight: '120px',
  width: '120px',
  display: 'inline-grid',
  margin: 10
}));
/*const [roleCard, setRoleCard] = React.useState('');*/
let cards = getWords(25);
let role = setType(25);
let i = 0;

const handleClick = function(e){
  console.log( 'loco' )
}

console.log(role);
function App() {
  return (
    <Container maxWidth="lg">
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 12,
          width: 700,
          height: 700,
        },
      }}
    >
      <section className='gameBoard'>
       
      {cards.map((card) => { 
         return <Item elevation={3} key={card} onClick={handleClick}>
                {card}
              </Item>
            })}
      </section>
    </Box>
    </Container>
  );
}

export default App;
