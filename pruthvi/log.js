let user=["pruthvishetkar50@gmail.com"]

let password=["pruthvi@123"]

let submit=document.querySelector(".btn")
 let username=document.querySelector(".email")

 let pass=document.querySelector(".password")

submit.addEventListener("click",function(){
 

if( user[0]==username.value&& password[0]==pass.value){
    window.location.href="index.html"
}
else{
    alert("invalid details")
}
})
