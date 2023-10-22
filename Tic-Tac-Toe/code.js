// Selecting all the boxes
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");
const box5 = document.querySelector("#box5");
const box6 = document.querySelector("#box6");
const box7 = document.querySelector("#box7");
const box8 = document.querySelector("#box8");
const box9 = document.querySelector("#box9");

const Reset = document.querySelector("#reset");
Reset.addEventListener('click',()=>{
    box1.textContent = "";
    box2.textContent = "";
    box3.textContent = "";
    box4.textContent = "";
    box5.textContent = "";
    box6.textContent = "";
    box7.textContent = "";
    box8.textContent = "";
    box9.textContent = "";
});

const player1 = 'O';
const player2 = 'X';
let currentPlayer = 1;


    box1.addEventListener('click',()=>{
        if(box1.textContent == "")
        {
            if (currentPlayer == 1)
            {
                box1.textContent = player1;
                currentPlayer = 0;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
             
            }
            else{
                box1.textContent = player2;
                currentPlayer = 1;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
            }
        }
    });
    
    box2.addEventListener('click',()=>{
        if(box2.textContent == "")
        {
            if (currentPlayer == 1)
            {
                box2.textContent = player1;
                currentPlayer = 0;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
            }
            else{
                box2.textContent = player2;
                currentPlayer = 1;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
            }
        }
    });
    
    box3.addEventListener('click',()=>{
        if(box3.textContent == "")
        {
            if (currentPlayer == 1)
            {
                box3.textContent = player1;
                currentPlayer = 0;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
            }
            else{
                box3.textContent = player2;
                currentPlayer = 1;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
            }
        }
    });
    
    box4.addEventListener('click',()=>{
        if(box4.textContent == "")
        {
            if (currentPlayer == 1)
            {
                box4.textContent = player1;
                currentPlayer = 0;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
            }
            else{
                box4.textContent = player2;
                currentPlayer = 1;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
            }
        }
    });
    
    box5.addEventListener('click',()=>{
        if(box5.textContent == "")
        {
            if (currentPlayer == 1)
            {
                box5.textContent = player1;
                currentPlayer = 0;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
            }
            else{
                box5.textContent = player2;
                currentPlayer = 1;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
            }
        }
    });
    
    box6.addEventListener('click',()=>{
        if(box6.textContent == "")
        {
            if (currentPlayer == 1)
            {
                box6.textContent = player1;
                currentPlayer = 0;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
            }
            else{
                box6.textContent = player2;
                currentPlayer = 1;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
            }
        }
    });
    
    box7.addEventListener('click',()=>{
        if(box7.textContent == "")
        {
            if (currentPlayer == 1)
            {
                box7.textContent = player1;
                currentPlayer = 0;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
            }
            else{
                box7.textContent = player2;
                currentPlayer = 1;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
            }
        }
    });
    
    box8.addEventListener('click',()=>{
        if(box8.textContent == "")
        {
            if (currentPlayer == 1)
            {
                box8.textContent = player1;
                currentPlayer = 0;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
            }
            else{
                box8.textContent = player2;
                currentPlayer = 1;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
            }
        }
    });
    
    box9.addEventListener('click',()=>{
        if(box9.textContent == "")
        {
            if (currentPlayer == 1)
            {
                box9.textContent = player1;
                currentPlayer = 0;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
            }
            else{
                box9.textContent = player2;
                currentPlayer = 1;
                const win = checkWinner();
                if(win!=1)
                {
                    checkDraw();
                }
            }
        }
    });


// Check winner function
const  checkWinner = ()=>{
    if (box1.textContent === player1 && box2.textContent === player1 && box3.textContent === player1) 
    {
        box1.innerHTML=`<del>${player1}</del>`;
        box2.innerHTML=`<del>${player1}</del>`;
        box3.innerHTML=`<del>${player1}</del>`;
        alert("Player 1 is win !! 🏆");
        return 1;
    } 
   else if (box1.textContent === player1 && box4.textContent === player1 && box7.textContent === player1)
   {
        box1.innerHTML=`<del>${player1}</del>`;
        box4.innerHTML=`<del>${player1}</del>`;
        box7.innerHTML=`<del>${player1}</del>`;
        alert("Player 1 is win !! 🏆");
        return 1;
   }
   else if (box1.textContent === player1 && box5.textContent === player1 && box9.textContent === player1)
    {
        box1.innerHTML=`<del>${player1}</del>`;
        box5.innerHTML=`<del>${player1}</del>`;
        box9.innerHTML=`<del>${player1}</del>`;
        alert("Player 1 is win !! 🏆");
        return 1;
    }
    else if (box7.textContent === player1 && box8.textContent === player1 && box9.textContent === player1)
    {
        box7.innerHTML=`<del>${player1}</del>`;
        box8.innerHTML=`<del>${player1}</del>`;
        box9.innerHTML=`<del>${player1}</del>`;
        alert("Player 1 is win !! 🏆");
        return 1;
    }
    else if (box7.textContent === player1 && box5.textContent === player1 && box3.textContent === player1)
    {
        box7.innerHTML=`<del>${player1}</del>`;
        box5.innerHTML=`<del>${player1}</del>`;
        box3.innerHTML=`<del>${player1}</del>`;
        alert("Player 1 is win !! 🏆");
        return 1;
    }
    else if (box3.textContent === player1 && box6.textContent === player1 && box9.textContent === player1)
    {
        box3.innerHTML=`<del>${player1}</del>`;
        box6.innerHTML=`<del>${player1}</del>`;
        box9.innerHTML=`<del>${player1}</del>`;
        alert("Player 1 is win !! 🏆");
        return 1;
    }

    else if (box1.textContent === player2 && box2.textContent === player2 && box3.textContent === player2) 
    {
        box1.innerHTML=`<del>${player2}</del>`;
        box2.innerHTML=`<del>${player2}</del>`;
        box3.innerHTML=`<del>${player2}</del>`;
        alert("Player 1 is win !! 🏆");
        return 1;
    } 
   else if (box1.textContent === player2 && box4.textContent === player2 && box7.textContent === player2)
   {
        box1.innerHTML=`<del>${player2}</del>`;
        box4.innerHTML=`<del>${player2}</del>`;
        box7.innerHTML=`<del>${player2}</del>`;
        alert("Player 1 is win !! 🏆");
        return 1;
   }
   else if (box1.textContent === player2 && box5.textContent === player2 && box9.textContent === player2)
    {
        box1.innerHTML=`<del>${player2}</del>`;
        box5.innerHTML=`<del>${player2}</del>`;
        box9.innerHTML=`<del>${player2}</del>`;
        alert("Player 1 is win !! 🏆");
        return 1;
    }
    else if (box7.textContent === player2 && box8.textContent === player2 && box9.textContent === player2)
    {
        box7.innerHTML=`<del>${player2}</del>`;
        box8.innerHTML=`<del>${player2}</del>`;
        box9.innerHTML=`<del>${player2}</del>`;
        alert("Player 1 is win !! 🏆");
        return 1;
    }
    else if (box7.textContent === player2 && box5.textContent === player2 && box3.textContent === player2)
    {
        box7.innerHTML=`<del>${player2}</del>`;
        box5.innerHTML=`<del>${player2}</del>`;
        box3.innerHTML=`<del>${player2}</del>`;
        alert("Player 1 is win !! 🏆");
        return 1;
    }
    else if (box3.textContent === player2 && box6.textContent === player2 && box9.textContent === player2)
    {
        box3.innerHTML=`<del>${player2}</del>`;
        box6.innerHTML=`<del>${player2}</del>`;
        box9.innerHTML=`<del>${player2}</del>`;
        alert("Player 1 is win !! 🏆");
        return 1;
    }
   
    
    else if (box4.textContent === player1 && box5.textContent === player1 && box6.textContent === player1)
    {
        box4.innerHTML=`<del>${player1}</del>`;
        box5.innerHTML=`<del>${player1}</del>`;
        box6.innerHTML=`<del>${player1}</del>`;
        alert("Player 1 is win !! 🏆");
        return 1;
    }

    else if (box2.textContent === player1 && box5.textContent === player1 && box8.textContent === player1)
    {
        box2.innerHTML=`<del>${player1}</del>`;
        box5.innerHTML=`<del>${player1}</del>`;
        box8.innerHTML=`<del>${player1}</del>`;
        alert("Player 1 is win !! 🏆");
        return 1;
    }

    else if (box4.textContent === player2 && box5.textContent === player2 && box6.textContent === player2)
    {
        box4.innerHTML=`<del>${player2}</del>`;
        box5.innerHTML=`<del>${player2}</del>`;
        box6.innerHTML=`<del>${player2}</del>`;
        alert("Player 1 is win !! 🏆");
        return 1;
    }

    else if (box2.textContent === player2 && box5.textContent === player2 && box8.textContent === player2)
    {
        box2.innerHTML=`<del>${player2}</del>`;
        box5.innerHTML=`<del>${player2}</del>`;
        box8.innerHTML=`<del>${player2}</del>`;
        alert("Player 1 is win !! 🏆");
        return 1;
    }
   
}


// Check Draw function
const checkDraw = ()=>{
    if(box1.textContent !="" && box2.textContent !="" && box3.textContent !="" &&box4.textContent != ""
    && box5.textContent !="" && box6.textContent !="" && box7.textContent !="" &&box8.textContent !="" &&box9.textContent!="")
    {
        alert("Game Draw !! 😁");
    }
};