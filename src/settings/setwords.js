const setType = function(n){
    let setGame = [[],''];
    let typeCard = ['red', 'blue', 'killer', 'civil'];
    let starter = typeCard[Math.floor(Math.random() * 2)];
    setGame[1] = `${starter} turn`;

    for(let i = 0; i < n; i++){
        let pValue = typeCard[3];
        setGame[0].push(pValue);
    }
    for(let i = 0; i < 9; i++){
        let pointer = Math.floor(Math.random() * n)
        let oldValue = setGame[0][pointer];
        if(oldValue  ==  starter){
            i--
          console.log("son igualesb")
        } else {
          setGame[0][pointer] = starter;
          console.log(oldValue); 
        }
    }
    for(let i = 0; i < 8; i++){
        let pValue;
        let pointer = Math.floor(Math.random() * n)
        let oldValue = setGame[0][pointer];

        starter === typeCard[0] ? pValue = typeCard[1] : pValue = typeCard[0];
        
        if (oldValue === typeCard[3]){
         setGame[0][pointer] = pValue  
        } else {
            i--
        }
    }
    for(let i = 0; i < 1; i++){
        let pValue = typeCard[2];
        let pointer = Math.floor(Math.random() * n);
        let oldValue = setGame[0][pointer];
        if (oldValue === typeCard[3]){
         setGame[0][pointer] = pValue   
        } else {
            i--
        }
    }
    return setGame;
}

export default setType;