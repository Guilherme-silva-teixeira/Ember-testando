var backgroundAlternable = document.getElementById("main-section");
backgroundAlternable.addEventListener("mouseenter",
    function()
    {
        this.style.animationName = null;
    }
);

function addLogic()
{
    let line = document.getElementById("line1c");
    let box1 = document.getElementById("b1");
    let box2 = document.getElementById("b2");
    let box3 = document.getElementById("b3");
    let box4 = document.getElementById("b4");
    let box5 = document.getElementById("b5");
    let box6 = document.getElementById("b6");
    let box7 = document.getElementById("b7");
    let box8 = document.getElementById("b8");
    let box9 = document.getElementById("b9");

    if((box1.innerText == 'X' && box2.innerText == 'X' && box3.innerText == 'X')
    ||(box4.innerText == 'X' && box5.innerText == 'X' && box6.innerText == 'X')
    ||(box7.innerText == 'X' && box8.innerText == 'X' && box9.innerText == 'X')
    )
    {
        restartGame();
    }
    else if((box1.innerText == 'X' && box4.innerText == 'X' && box7.innerText == 'X')
    ||(box2.innerText == 'X' && box5.innerText == 'X' && box8.innerText == 'X')
    ||(box3.innerText == 'X' && box6.innerText == 'X' && box9.innerText == 'X')
    )
    {
        restartGame();
    }
    else if((box1.innerText == 'X' && box5.innerText == 'X' && box9.innerText == 'X')
    ||(box3.innerText == 'X' && box5.innerText == 'X' && box7.innerText == 'X')
    )
    {
        line.style.zIndex = "5";
        restartGame();
    }
}

function optionMenu()
{
    var elementPopUp = document.getElementById("sideMenu");
    elementPopUp.style.marginLeft = "100px";
    elementPopUp.style.height = "300px"
    elementPopUp.style.width = "300px";
    elementPopUp.style.position = "absolute";
    elementPopUp.style.zIndex = "1";
    elementPopUp.style.background = "#fff4";
    elementPopUp.style.border = "1px solid #fff";
    elementPopUp.style.borderRadius = "17px";

    let close = document.getElementById("close").addEventListener("click",
        function()
        {
            this.style.height = "27px";
            this.style.width = "55px";
            this.style.background = "#f444";
            elementPopUp.style.marginLeft = "-1000px";
        }
    );
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

function selectAStyle()
{
    let menu = document.getElementById("sideMenu");
    menu.style.marginLeft = "-1300px";
    let main_container = document.getElementById("stylebox");
    main_container.style.marginLeft = "100px";
    let closeButton = document.getElementById("closeButton").addEventListener("click",
        function()
        {
            main_container.style.marginLeft = "-1300px";
            menu.style.marginLeft = "100px";
        }
    );
}

function addAnimation()
{
        let initialbox = document.getElementById("secondTableForGame");
        let upperbox = document.getElementById("game");
        let closeL = document.getElementById("heigBox01");
        let closeR = document.getElementById("heigBox02");
        let animationBoard = document.getElementById("animationBoard");
        closeL.style.animationName = "closeItemL , openL";
        closeR.style.animationName = "closeItemR , openR";
        closeL.style.animationDuration = "1s";
        closeR.style.animationDuration = "1s";
        upperbox.style.zIndex = "13";
        initialbox.style.zIndex = "-10"
        upperbox.style.animationName = "ZIndexForAnimationBoard";
        upperbox.style.animationDuration = "3s";
}
