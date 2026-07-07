// Rock Paper Scissor function

function RPS(user,computer){
    if(user === computer) return "Match draw";

    if(user==="rock" && computer === "scissor") return "user win";
    if(user === "paper" && computer === "rock") return "user win";
    if(user === "scissor" && computer === "paper") return "user win";

    else return "computer win";
}

console.log(RPS('rock' , 'rock'))