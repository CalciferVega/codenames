import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import setGame from '../settings/words';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Score from './counter';
import Boardmap from './boardmap';
import { v4 } from 'uuid';
import Turn from './Turn';
import Modal from './Modal';

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
let starterTeam = cards[0].starter;

function Codenames() {


  let [scoreRed, setRed] = useState(0);
  let [scoreBlue, setBlue] = useState(0);
  let [winner, setWinner] = useState('');
  let [gameover, setGameover] = useState(true);
  let [turn, setTurn] = useState(starterTeam);
  let [toggle, setToggle] = useState(false);
  let [modaltext, setModalText] = useState('');

  const initGame = function () {
    setGameover(false);
    setRed(0);
    setBlue(0);
    setWinner('');
    cards = [];
    cards = setGame(25);
    let newstarterTeam = cards[0].starter;
    setTurn(newstarterTeam);
    let element = document.querySelector('.MuiPaper-root');
    element.classList.remove('red','blue','civil', 'killer');
  }

  const checkWinner = function(){
    let redWin = 'El equipo Rojo ha ganado';
    let blueWin = 'El equipo Azul ha ganado'

    if (starterTeam === 'red'){
      if (scoreRed === 9){ 
        setModalText(redWin)
        setToggle(true) 
      } else if( scoreBlue === 8 ){
        setModalText(blueWin)
        setToggle(true) 
      }
      
    } else {
      if (scoreBlue === 9){ 
        setModalText(blueWin);
        setToggle(true);
      } else if( scoreRed === 8 ){
        setModalText(redWin);
        setToggle(true);
      }
    }
  }

  useEffect(checkWinner);

  const handleClick = function (e) {
    let roleCss = e.target.getAttribute('data');
   
    let containsRed = e.target.classList.contains('red');
    let containsBlue = e.target.classList.contains('blue');
   
    if ((roleCss === 'red' && !containsRed) || (roleCss === 'blue' && !containsBlue)) {
      
      
      if(roleCss === 'red') {
        setRed(scoreRed + 1)
      } else { 
        setBlue(scoreBlue + 1);
      } 
      
      if(turn !== roleCss){
        let nextTeam = 'red'
        turn === nextTeam ? nextTeam = 'blue' : nextTeam = 'red'; 
        setTurn(nextTeam);
      }
      e.target.classList.add(roleCss);
    }

    if (roleCss === 'killer') {
      e.target.classList.add(roleCss);
      alert('se acabo el juego, el equipo contrario gana');
      initGame();
    }

    if (roleCss === 'civil') {
      e.target.classList.add(roleCss);
      let nextTeam = 'red';
      turn === nextTeam ? nextTeam = 'blue' : nextTeam = 'red'; 
      setTurn(nextTeam);
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


        <section className='gameBoard'>

          {cards.map((card) => {
            return <Item elevation={3} key={card.word} onClick={handleClick} data={card.role}>
              {card.word.toUpperCase()}
            </Item>
          })}
        </section>

        <section>
          <Turn team={turn} />
          <Score redscore={scoreRed} bluescore={scoreBlue}></Score>
          <article className="boardmap">
            {cards.map((card) => {
              return <Boardmap roleCss={card.role} key={v4()} isKiller={card.role === 'killer' ? true : false}></Boardmap>
            })}
          </article>
        </section>
        <Modal open={toggle}>{modaltext}</Modal>
      </Box>
    </Container>
  );
}

export default Codenames;