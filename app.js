// event bubling 
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");
// div.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("div was clicked ");
// })
// for (li of lis) {
//     li.addEventListener("click", function (event) {
//         event.stopPropagation();
//         console.log("list was clicked ");
//     })
// }
// ul.addEventListener("click", function () {
//     event.stopPropagation();

//     console.log("ul was clicked ");
// })





// todo app
// let inp = document.querySelector("input");
// let ul = document.querySelector("ul");
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     let item = document.createElement("li");
//     item.innerText = inp.value;
//     let dbt = document.createElement("button");
//     dbt.innerText = "delete";
//     dbt.classList.add("delete");
//     item.appendChild(dbt);

//     ul.appendChild(item);
//     inp.value = "";
// });
//  ul.addEventListener("click",function(event){
//     if(event.target.nodeName=="BUTTON"){
//         let itemList=event.target.parentElement;
//         itemList.remove();
//     }})








// // simon game 
// let gameSeq = [];
// let userSeq = [];
// let btns = ["yellow", "red", "purple", "green"];
// let started = false;
// let level = 0;
// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function () {
//     if (started == false) {
//         started = true;
//         levelup();
//     }
// });
// function gameFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
// }, 250);
// }
// function userFlash(btn) {
// btn.classList.add("userflash");
// setTimeout(function () {
// btn.classList.remove("userflash");
//     }, 250);
// }
// function levelup() {
//     userSeq = [];
//     level++;
//     h2.innerText = `level ${level}`;
//     let randIdx = Math.floor(Math.random() * 4);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     console.log(gameSeq)
//     gameFlash(randBtn);
// }
// function checkAns(idx) {
//     if (userSeq[idx] == gameSeq[idx]) {
//         if (userSeq.length == gameSeq.length) {
//             setTimeout(levelup, 1000);
//         }

//     }
//     else {
//         h2.innerHTML = `game over ! your score <b>${level}</b> <br> Press any key to start.`;
//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(function () {
//             document.querySelector("body").style.backgroundColor = "white";
//         }, 100)
//         reset();
//     }
// }
// function btnPress() {
//     let btn = this;
//     userFlash(btn);
//     userColor = btn.getAttribute("id");
//     userSeq.push(userColor);
//     checkAns(userSeq.length - 1);
//     // console.log("btn was pressed ");
// }
// let allBtns = document.querySelectorAll(".btn");
// for (btn of allBtns) {
//     btn.addEventListener("click", btnPress);
// }
// function reset() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }
