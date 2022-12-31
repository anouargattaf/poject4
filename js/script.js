function updateData(){
    let date= new Date();
    let setTime =document.getElementById('setTime');
    setTime.innerHTML = date.getHours() + ':' + date.getMinutes()+ ':' + date.getSeconds() ;
    let setDate = document.getElementById('setDate');
    setDate.innerHTML = date.getDate() + '-' + parseInt(date.getMonth()+1) + '-' + date.getFullYear();
}
setInterval(updateData,50)
onload = () =>{
    updateData()
}
function getColor(){
    let getColor = document.getElementById('setColor').value;
    localStorage.setItem("color",getColor);
    document.getElementById('outside_box').style.background = localStorage.getItem("color");
    document.getElementById('setTime').style.color = localStorage.getItem("color");
    document.getElementById('setDate').style.color = localStorage.getItem("color");

}
function setColor(){
    document.getElementById('setColor').value = localStorage.getItem("color");
    document.getElementById('outside_box').style.background = localStorage.getItem("color");
    document.getElementById('setTime').style.color = localStorage.getItem("color");
    document.getElementById('setDate').style.color = localStorage.getItem("color");

}
setInterval(setColor,50);