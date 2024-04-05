let boxes =document.querySelectorAll(".box");
let newGame=document.querySelector(".newGame");
let resetGame=document.querySelector(".resetGame");
let container=document.querySelector(".container");
let h1=document.querySelector("h1");
let currentTurn=document.querySelector("#currentTurn");
let ct="o";

let count=0;
let win=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [3,4,5],
  [6,7,8],
  [2,4,6],
]

let turn0=true;

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    
       count++;
      if(turn0){
        box.innerText="o";
        ct="x";
        currentTurn.innerText=`NOW TURN OF player ${ct}`;
     
        turn0=false;
      
      }
      else{
        box.innerText="x";
        ct="o";
        currentTurn.innerText=`NOW TURN OF player ${ct}`;
    
        turn0=true;
       
       }
       box.disabled=true;
      
       checkWinner();
       if(count==9){
        document.querySelector("#msg").classList.remove("winner");
        document.querySelector(".msg-content").innerText="Match Draw 😀 ";
        h1.style. boxShadow=" 0 0 7px 7px  rgb(13, 6, 20)";
       }
    });
});
 
newGame.addEventListener("click",()=>{
  count=0;
 empty();
 document.querySelector("#msg").classList.add("winner");
 enable();
})
resetGame.addEventListener("click",()=>{
  count=0;
 empty();
 document.querySelector("#msg").classList.add("winner");
 enable();
})
let empty=()=>{
    boxes.forEach((box) =>{
        box.innerText="";
    })
}
let disable=()=>{
   boxes.forEach((box)=>{
    box.disabled=true;
    h1.style. boxShadow=" 0 0 7px 7px  rgb(13, 6, 20)";
   })
}
let enable=()=>{
   boxes.forEach((box)=>{
   box.disabled=false;
   ct="o";
   currentTurn.innerText=`player ${ct}`;
   h1.style. boxShadow=" 0 0 7px 7px  rgb(162, 30, 92)";
   turn0=true;

})
}

let checkWinner=()=>{
    for(ele of win){
        let para=boxes[ele[0]].innerText;
    if(boxes[ele[0]].innerText!="" && boxes[ele[1]].innerText!="" && boxes[ele[2]].innerText!=""){
        if(boxes[ele[0]].innerText==boxes[ele[1]].innerText && boxes[ele[1]].innerText==boxes[ele[2]].innerText){
           document.querySelector("#msg").classList.remove("winner");
           document.querySelector(".msg-content").innerText=`Winner is ${para} 🥳`;
           disable();

          }
      }
    }
}