const comTable = document.querySelector("#table");
const btn = document.querySelector(".btn");
let td = document.querySelectorAll("p");
const avg_result = document.querySelector(".avg_result");

comTable.style.display = "none";
btn.addEventListener("click", function(){
    let value = [];
    for(let i =0; i <20; i++){
        td[i].textContent = "";
    }
    const percentage = document.querySelector(".percentage");
    const per_value = parseInt(percentage.value);
    if( per_value <2 || isNaN(per_value)){
        alert("2이상의 값을 입력해주세요");
    }
    else if(per_value > 349){
        alert("349이하의 값을 입력해주세요");
    }
    else{
        comTable.style.display = "table";
        let rand_0_99;
        let temp = true;
        let i = 0;
        let cnt = 0;
        while(temp){
            i ++;
            rand_0_99 = Math.floor(Math.random() * per_value);
            if (rand_0_99 == 1){
                value.push(i);
                i =0;
                cnt ++;
            }
            if(cnt == 20){
                let sum =0;
                for(let i =0; i <20; i++){
                    if(value[i] >= 700){
                        td[i].style.color = "#f00";
                    }
                    else if(value[i] < 200){
                        td[i].style.color = "#00f";
                    }
                    else{
                        td[i].style.color = "#000";
                    }
                    td[i].textContent = value[i];
                    sum = sum + value[i];
                    
                }
                console.log(sum/20);
                temp = false; 
                avg_result.textContent = "평균 : " + sum/20;
            }
        }
    } 
});