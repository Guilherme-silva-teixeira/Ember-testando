function game(id)
{
    let actualBox = document.getElementById(id);
    if(actualBox.innerText == "")
    {
        actualBox.innerText = choosePlayer();
        changeGame();
    }
    else if(actualBox.innerText == "X")
    {
        actualBox.innerText = "X";
    }
    else if(actualBox.innerText == "O")
    {
        actualBox.innerText = "O";
    }
}

let playerX = "X",playerY = "O",atualPlayer = playerY;
function choosePlayer()
{
    if(atualPlayer == playerX)
    {
        atualPlayer = playerY;
        return atualPlayer;
    }
    else
    {
        atualPlayer = playerX;
        return atualPlayer;
    }
}

//in progress

function checkGroupOfThree(id1,id2,id3)
{
    let idOfBox1 = document.getElementById(id1).innerText;
    let idOfBox2 = document.getElementById(id2).innerText;
    let idOfBox3 = document.getElementById(id3).innerText;

    return idOfBox1 === "X" && idOfBox2 === "X" && idOfBox3 === "X";
}

//in progress

function checkWiner()
{

}

//artificial inteligencce

function changeGame()
{
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");

    let box4 = document.getElementById("box4");
    let box5 = document.getElementById("box5");
    let box6 = document.getElementById("box6");

    let box7 = document.getElementById("box7");
    let box8 = document.getElementById("box8");
    let box9 = document.getElementById("box9");

    if(checkGroupOfThree(box1, box5, box9) == 'X')
    {
        box3.innerText = 'X';
    }
}
