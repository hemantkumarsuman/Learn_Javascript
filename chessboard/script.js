const chess = document.querySelector('.chessboard');

for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
        const square = document.createElement('div');
        square.classList.add('square');

        if((i+j)%2 === 0){
            square.classList.add('black');
        }
        else{
            square.classList.add('white');
        }

        chess.appendChild(square);
    }
}