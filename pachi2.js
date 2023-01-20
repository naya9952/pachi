const comTable = document.querySelector("#table");
const btn = document.querySelector(".btn");
let td = document.querySelectorAll("p");

btn.addEventListener("click", function(){
    const percentage = document.querySelector(".percentage");
    const avg_result = document.querySelector(".avg_result");
    let sum =0;
    let cnt = 10;
    let avg;
    let kide;
    let percent = parseInt(percentage.value);
    const atari_arry = document.querySelectorAll(".atari");
    for(let i =0; i < 10; i++){
        if(atari_arry[i].value <= 0){
            atari_arry[i].value = 0;
            cnt = cnt -1;
        }
        if(atari_arry[i].value==""){
            atari_arry[i].value = 0;
            cnt = cnt -1;
        }
    }
    for(let i =0; i < 10; i++){
        sum = sum + parseInt(atari_arry[i].value);
        console.log(sum);
    }
    if(cnt != 0){
        avg = parseInt(sum/cnt);
        
        kide = (percent - (avg/2)) *2;
        avg_result.textContent = "평균 : " + avg 
        + " | 다음 아타리 기대치 : "+ kide;
    }
    else{
        avg_result.textContent = "평균 : 0" ;
    }
});