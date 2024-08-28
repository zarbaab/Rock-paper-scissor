let userscore=0;
let comscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");



const showWinner=(userwin, userchoice, compchoice)=>{
    if(userwin){
        userscore++;
        userScorePara.innerText=userscore;
        console.log("YOU WIN!")
        msg.innerText=`YOU WIN! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";

    }
   
else {
    comscore++;
    compScorePara.innerText=comscore;

    console.log("YOU LOSE!")
    msg.innerText=`You Lose! ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";

}
};

const drawgame=()=>{
    console.log("Game Draw");
    msg.innerText="Game Draw! play again";
    msg.style.backgroundColor="blueviolet";

};
const genComChoice=()=>{
    const options=["rock","paper","scissor"];
    const randindx=Math.floor(Math.random()*3);
    return options[randindx];
};

const playgame=(userchoice)=>{
console.log("user choice",userchoice);
const  compchoice=genComChoice();
console.log("computer choice",compchoice); 
    
if(compchoice===userchoice){
    drawgame(); 
}
else {
    let userwin=true;
    
    if(userchoice===rock){
        userwin=compchoice==="paper"?false :true;
    }
    else if(userchoice===paper){
        userwin=compchoice==="scissor"?false :true;

    }
    else {
        userwin=compchoice==="rock"?false:true;
    }
    showWinner(userwin,userchoice,compchoice);
}
};
choices.forEach((choice) => {
  
    choice.addEventListener("click",()=>{
        
        const userchoice=choice.getAttribute("id")
        
        playgame(userchoice);
    })
    
});