let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetting");
let newgamebtn=document.querySelector("#newgamebtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;

let winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame=()=>{
    count=0;
    enablebtns();
    msgcontainer.classList.add("hide");
}

const disablebtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enablebtns=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showwinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtns();
}

const draw=()=>{
    msg.innerText=`Draw`;
    msgcontainer.classList.remove("hide");
    disablebtns();
}


const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
    if(pos1 !="" && pos2 != "" && pos3 != "" ){
        if(pos1==pos2 && pos2==pos3 && pos3==pos1){
            showwinner(pos1);
            }
        else{
            if(count==9) draw();
        }
        }
    }
}


boxes.forEach(box => {
    box.onclick = () => {
        if (count % 2 == 0) {
            box.innerText="X";
            count++;
        } else {
            box.innerText="O";
            count++;
        }
        box.disabled=true;
        checkwinner();
    };
});

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
