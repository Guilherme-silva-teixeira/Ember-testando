var playerX = 'X' , playerY = 'O';
var atualplayer = playerY;
let winner = "";
let points = 0;
let bigWin = 0;
let xPoints = 0;
let yPoints = 0;
let coins = 0;

//else if()

function atualPlayer() {
        if(atualplayer == playerX)
        {
            atualplayer = playerY;
            return atualplayer;
        }    
        else
        {
            atualplayer = playerX;
            return atualplayer;
        }
}

function boxClick(boxId)
{
    let box = document.getElementById(boxId);
    if(box.innerText === '')
    {
        box.innerText = atualPlayer();
        checkWinner();
        bigM();
        changeGameplay();
        secondBoard();
    }
}

function restartGame()
{
    let button = document.getElementById("restart");
    let box1 = document.getElementById("b1");
    let box2 = document.getElementById("b2");
    let box3 = document.getElementById("b3");
    let box4 = document.getElementById("b4");
    let box5 = document.getElementById("b5");
    let box6 = document.getElementById("b6");
    let box7 = document.getElementById("b7");
    let box8 = document.getElementById("b8");
    let box9 = document.getElementById("b9");

    box1.innerText = "";
    box2.innerText = "";
    box3.innerText = "";

    box4.innerText = "";
    box5.innerText = "";
    box6.innerText = "";

    box7.innerText = "";
    box8.innerText = "";
    box9.innerText = "";
}


function checkWinner()
{
    let box1 = document.getElementById("b1");
    let box2 = document.getElementById("b2");
    let box3 = document.getElementById("b3");
    let box4 = document.getElementById("b4");
    let box5 = document.getElementById("b5");
    let box6 = document.getElementById("b6");
    let box7 = document.getElementById("b7");
    let box8 = document.getElementById("b8");
    let box9 = document.getElementById("b9");

    /* bug
        if(getOneToX('b1'))
        {
            box4.innerText = 'O';
        }

        //double para as primeiras 3 horizontais

        if(checkDoubleForX('b1','b2'))
        {
            box3.innerText = 'O';
        }
        else if(checkDoubleForX('b4','b5'))
        {
            box6.innerText = 'O';
        }
        else if(checkDoubleForX('b7','b8'))
        {
            box9.innerText = 'O';
        }

        //double para as proximas horizontais só que ao contrário

        else if(checkDoubleForX('b2','b3'))
        {
            box1.innerText = 'O';
        }
        else if(checkDoubleForX('b5','b6'))
        {
            box4.innerText = 'O';
        }
        else if(checkDoubleForX('b8','b9'))
        {
            box7.innerText = 'O';
        }

        //verifica se o centro está vazio

        else if(checkDoubleForX('b1','b3'))
        {
            box2.innerText = 'O';
        }
        else if(checkDoubleForX('b4','b6'))
        {
            box5.innerText = 'O';
        }
        else if (checkDoubleForX('b7','b9'))
        {
            box8.innerText = 'O';
        }

        //para apenas uma casa
        
        else if(getOneToX('b2'))
        {
            box4.innerText = 'O';
        }
        else if(getOneToX('b3'))
        {
            let variableV = randomNumber(2);
            if(variableV == 1)
            {
                box5.innerText = 'O';
            }
            else if(variableV == 2)
            {
                box6.innerText = 'O';
            }
        }
        else if(getOneToX('b4'))
        {
            if(box2.innerText == 'X'||box3.innerText == 'X'||box5.innerText == 'X'||box7.innerText=='X')
            {
                box1.innerText = 'O';
            }else if(box1.innerText == 'X'||box3.innerText == 'X'||box5.innerText == 'X'||box7.innerText=='X')
            {
                box2.innerText = 'O';
            }else if(box1.innerText == 'X'||box2.innerText == 'X'||box5.innerText == 'X'||box7.innerText=='X')
            {
                box3.innerText = 'O';
            }else if(box1.innerText == 'X'||box2.innerText == 'X'||box3.innerText == 'X'||box7.innerText=='X')
            {
                box5.innerText = 'O';
            }
            else if(box1.innerText||box2.innerText == 'X'||box3.innerText == 'X'||box5.innerText == 'X')
            {
                box7.innerText = 'O';
            }
        }
        else if(getOneToX('b5'))
        {
            if(box2.innerText == ''||box4.innerText == ''||box6.innerText == ''||box8.innerText=='')
            {
                box1.innerText = 'O';
            }
        }
*/
 
    let pointsX = 0;
    let pointsY = 0;
    let statsX = document.getElementById("you");
    let statsY = document.getElementById("computer");
    let display = document.getElementById("youG2");
    if(
    checkRowForX('b1','b2','b3')||
    checkRowForX('b4','b5','b6')||
    checkRowForX('b7','b8','b9')||
    checkRowForX('b1','b4','b7')||
    checkRowForX('b2','b5','b8')||
    checkRowForX('b3','b6','b9')||
    checkRowForX('b1','b5','b9')||
    checkRowForX('b3','b5','b7')
    )
    {
        console.log("x wins");
        //let display = document.getElementById("display");
        //display.innerText("jogador 'X' ganhou");
        pointsX = pointsX++;
        statsX.innerText = "You: "+pointsX;
        display.innerText = "You: " + pointsX;
        restartGame();
    }else if(
       ( checkRowForY('b1','b2','b3')||
        checkRowForY('b4','b5','b6')||
        checkRowForY('b7','b8','b9')||
        checkRowForY('b1','b4','b7')||
        checkRowForY('b2','b5','b8')||
        checkRowForY('b3','b6','b9')||
        checkRowForY('b1','b5','b9')||
        checkRowForY('b3','b5','b7'))
    )
    {
        pointsY = pointsY++;
        statsY.innerText = "Computer: "+pointsY;
        restartGame();
    }
}

function getOneToX (boxId)
{
    let box = document.getElementById(boxId).innerText;

    return box === 'O';
}

function checkDoubleForX(box1Id,box2Id)
{
    let box1 = document.getElementById(box1Id).innerText;
    let box2 = document.getElementById(box2Id).innerText;

    return box1 === 'X' && box2 === 'X';
}

function checkRowForX(box1ID, box2ID, box3ID)
{
    let box1 = document.getElementById(box1ID).innerText;
    let box2 = document.getElementById(box2ID).innerText;
    let box3 = document.getElementById(box3ID).innerText;

    return box1 === 'X' && box2 === 'X' && box3 === 'X';
}

function checkRowForY(box1ID , box2ID , box3ID)
{
    let box1 = document.getElementById(box1ID).innerText;
    let box2 = document.getElementById(box2ID).innerText;
    let box3 = document.getElementById(box3ID).innerText;

    return box1 === 'O' && box2 === 'O' && box3 === 'O';
}

function checkBox(boxId)
{
    let box = document.getElementById(boxId).innerText;
    return box === true;
}

function whileGameWins()
{
    let randomHouse = Math.floor(Math.random() * 9 ) + 1;
    let box1 = document.getElementById("game"+randomHouse);
    let pointsX = 0;
    let win = false;
    if(checkWinner()==true)
    {
        pointsX++;
        win = true;
        box1.innerText = "X";
    }
    getElement();
}

function nextHouse()
{

}

function bigM()
{

    //variavel das boards 2 embaixo e 1 em cima

    let gameN1 = document.getElementById("game");
    let gameN2 = document.getElementById("secondTableForGame");

    //boxes da primeira board
    let box1 = document.getElementById("b1");
    let box2 = document.getElementById("b2");
    let box3 = document.getElementById("b3");

    let box4 = document.getElementById("b4");
    let box5 = document.getElementById("b5");
    let box6 = document.getElementById("b6");

    let box7 = document.getElementById("b7");
    let box8 = document.getElementById("b8");
    let box9 = document.getElementById("b9");

    //boxes da segunda board

    let game1 = document.getElementById("game1");
    let game2 = document.getElementById("game2");
    let game3 = document.getElementById("game3");

    let game4 = document.getElementById("game4");
    let game5 = document.getElementById("game5");
    let game6 = document.getElementById("game6");

    let game7 = document.getElementById("game7");
    let game8 = document.getElementById("game8");
    let game9 = document.getElementById("game9");
    
    //condição se a casa do jogo 2 estiver em branco e a casa do jogo 1 estiver preenchida, o jogo 2 ganha
    if(box2.innerText == "")
    {
        box2.addEventListener("onmouseenter",
            function()
            {
                this.style.cursor = "pointer";
                this.style.backgroundColor = "#dfd3";
            }
        );
    }

    if(box1.innerText == 'X' && box2.innerText == 'X' && box3.innerText == 'X')
    {
        box1.innerText = "";
        box2.innerText = "";
        box3.innerText = "";
        box4.innerText = "";
        box5.innerText = "";
        box6.innerText = "";
        box7.innerText = "";
        box8.innerText = "";
        game1.innerText = "X";

        gameN1.style.zIndex = "3";
        gameN2.style.zIndex = "7";
    }
}

function firstBoard()
{

}

function coinsController()
{
    let coins = 0;
    let coinsqtqd = document.getElementById("qtdq");
    if(coinsqtqd.innerText == "X")
    {
        coins++;
    }

}

function changeGameplay()
{
    let boxes = new array(9);
    boxes[1] = document.getElementById("b1");
    boxes[2] = document.getElementById("b2");
    boxes[3] = document.getElementById("b3");
    boxes[4] = document.getElementById("b4");
    boxes[5] = document.getElementById("b5");
    boxes[6] = document.getElementById("b6");
    boxes[7] = document.getElementById("b7");
    boxes[8] = document.getElementById("b8");
    boxes[9] = document.getElementById("b9");

    if(getElementByGroup(boxes[1],boxes[2])=="X")
    {
        boxes[3].innerText = "O";
    }
}

function getElementByGroup(element1 , element2)
{
    if(element1.innerText == "X" && element2.innerText == "X")
    {
        return "X";
    }
}

function randomNumber(numberValue)
{
    let initialVarible = Math.random();
    let finalValue = Math.floor(initialVarible * numberValue);
    finalValue =+ 1;
    return finalValue;
}
