//accesing buttons
let allbtns = document.querySelectorAll(".box");

//accesing reset btn
let resetBtn = document.querySelector("#reset-btn");

//accessing new button
let newbtn = document.querySelector("#new-btn");

// accessing msg container
let msgContainer = document.querySelector(".msg-Container");

//accessing para 
let msgPara = document.querySelector("#msg");


//alternate turn of players plyX plyY

let turnO = true;//storing on turn of O



/*making 2-D array for storing winning pattern values arr = [[][][]];
horizontally
0 1 2| 3,4,5| 6,7,8 
vertically
0,3,6|1,4,7|2,5,8
diagonally
0,4,8|2,4,6
*/

let winPatterns = [
    [0,1,2],[0,3,6],[0,4,8],//zero wale
    [1,4,7],//1 wale
    [2,4,6],[2,5,8],//2 wale
    [3,4,5],//3 wale
    [6,7,8]//6 wale
];

//reset game btn function

const resetGame = () =>{
    turnO = true;
    unableBtnAfterWin();
    msgContainer.classList.add("hide");
    click_count = 0;
}

//we have to add click functionality by addeventlisteners over buttons for all so we will use foreach loop

allbtns.forEach((btn) =>{
    btn.addEventListener("click", () =>{

        if(turnO === true){//plyO turn
            btn.style.color = "#2191E6";
            btn.innerText = "O";
            turnO = false;//bcoz on next time it should not be true

        }else{
            btn.style.color = "#D62246";
            btn.innerText = "X";//plyX turn
            turnO = true;//bcoz on next time it should not be false
        }
         btn.disabled = "true"//for only one time one turn writing either O or X
         //when a button is clickes then check for win patter using function
         checkWinner();
    });
});

//for unabling the btns after finding one winner

const unableBtnAfterWin = () =>{
    for (btn of allbtns){
        btn.disabled = false;
        btn.innerText = ""
    }
}

//for disabiling the btns after finding one winner

const disableBtnAfterWin = () =>{
    for (btn of allbtns){
        btn.disabled = true;
    }
}

const showWinner = (winner) =>{
    msgPara.innerText = `Congratulations the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    //calling disable after showing winner
   disableBtnAfterWin();
 }
//first chk each pattern from array if any 3position elements are matching then its a winner or if not found then not a winner
// for tracking the winner for traversing win patterns array


const checkWinner = () =>{   //win patterns vr for of - loop chalvaycha for removing one one pattern
    for (let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);

        // console.log(allbtns[pattern[0]].innerText,allbtns[pattern[1]].innerText,allbtns[pattern[2]].innerText);//used pattern[0] etc for removing index of each pattern // allbtns[[]] used for fetching the positon of same element and . innertext is used for
        // down one code is same as above

        let pos1Val = allbtns[pattern[0]].innerText;
        let pos2Val = allbtns[pattern[1]].innerText;
        let pos3Val = allbtns[pattern[2]].innerText;

        // we have to chk wether 3 values from above are same and not empty

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            //for checking winning pattern
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                
                showWinner(pos1Val);//function for showing winner and pos1Val is the winner so passed in func
            }
        }

    }


};

newbtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);






