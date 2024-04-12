let box=document.querySelectorAll(".cell")
let turn=0;

const btn=document.getElementById("reset");
btn.addEventListener("click",()=>{
    box.forEach(e=>{
        e.innerHTML=""
        e.classList.remove("disabled")
    })
})



box.forEach(e => {
    e.addEventListener("click",()=>{
        if(turn==0){
            e.innerHTML="O"
            turn=1
        }
        else{
            e.innerHTML='X'
            turn=0
        }
        e.classList.add("disabled")
        check();
    })

    
});
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const check=()=>{
    let flag=false;
    for(let i=0;i<win.length;i++){
        let k1=box[win[i][0]].innerHTML;
        let k2=box[win[i][1]].innerHTML;
        let k3=box[win[i][2]].innerHTML;
        if(k1!="" && k2!="" && k3!=""){
            if(k1==k2&&k2==k3){
                let m=document.querySelector(".msg")
                flag=true;

                m.innerText=`${k1} wins`


            }
        }


    }
}