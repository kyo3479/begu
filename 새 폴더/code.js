
const good = ["김범준","우승연","안준후","백주호","전수현","김나영","성예영","정안나"];


function print(){
    const user_id = document.getElementById("iname").value;
    console.log(user_id)
    if (good.includes(user_id)){
        document.getElementById("result").innerText = "합격!";
    }else{
        document.getElementById("result").innerText = "불합격";
    }
    
}