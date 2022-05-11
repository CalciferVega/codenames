import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import setGame from './settings/words';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Score from './components/counter';
import Boardmap from './components/boardmap';
import { v4 } from 'uuid';

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

let cards = setGame(25);


function App() {

 
  let [scoreRed, setRed] = useState(0);
  let [scoreBlue, setBlue] = useState(0);


  const handleClick = function(e){
    let roleCss = e.target.getAttribute('data');
    e.target.classList.add(roleCss);
    
    if (roleCss === 'red' || roleCss === 'blue'){ 
    roleCss === 'red' ? setRed(scoreRed + 1)  : setBlue(scoreBlue + 1);
    }

    if (roleCss === 'killer'){
      alert('se acabo el juego, el equipo contrario gana')
    }
  }

  return (
    <Container maxWidth="lg">
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 12,
        },
      }}
    >
      <section>
        <Score redscore={scoreRed} bluescore={scoreBlue}></Score>
        <article className="boardmap">
          {cards.map((card) => { 
            return <Boardmap roleCss={card.role} key={v4()} isKiller={card.role === 'killer' ? true: false }></Boardmap>
          })}
        </article>
      </section>

      <section className='gameBoard'>
       
      {cards.map((card) => { 
         return <Item elevation={3} key={card.word} onClick={handleClick} data={card.role}>
                {card.word}
              </Item>
            })}
      </section>
    </Box>
    </Container>
  );
}

export default App;
