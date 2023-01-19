const comTable = document.querySelector("#table");
const btn = document.querySelector(".btn");
let td = document.querySelectorAll("p");

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
        console.log(per_value);
        comTable.style.display = "table";
        let rand_0_99;
        let temp = true;
        let i = 0;
        let cnt = 0;
        while(temp){
        i ++;
        rand_0_99 = Math.floor(Math.random() * per_value);
        if (rand_0_99 == 1){
            console.log(i);
            value.push(i);
            i =0;
            cnt ++;
        }
        if(cnt == 20){
            for(let i =0; i <20; i++){
                td[i].textContent = value[i];
            }
            temp = false; 
        }
        }
    }
    
});


