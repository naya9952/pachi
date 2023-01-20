const comTable = document.querySelector("#table");
const btn = document.querySelector(".btn");
let td = document.querySelectorAll("p");
let rand_0_99;
btn.addEventListener("click", function(){
    const percentage = document.querySelector(".percentage");
    const avg_result = document.querySelector(".avg_result");
    let sum =0;
    let cnt = 10;
    let avg;
    let kide;
    const atari_arry = document.querySelectorAll(".atari");
    for(let i =0; i < 10; i++){
        if(atari_arry[i].value==""){
            cnt = cnt -1;
        }
    }
    rand_0_99 = Math.floor(Math.random() * cnt);

    if(cnt != 0){
        avg_result.textContent = "선택 : " + atari_arry[rand_0_99].value;
    }
    else{
        avg_result.textContent = "1개 이상 입력해주세요." ;
    }
});