let a="PHOTOGRAPHY MAKES US HAPPY TAKE A SHOT.."

let heading=document.querySelector("h1")
let i=0;

function interval(){
    setInterval(()=>{
    if(i==a.length-1){
        clearInterval(interval)
        heading.innerHTML=''
        i=0;
        // interval();
    }
heading.innerHTML+=a[i++]
},100)
}

interval();

async function fetchData(){
let data=await fetch('https://pixabay.com/api/?key=27422057-c9610f7a3e1e8049e7bf4b7c3&q=yellow+flowers&image_type=photo&pretty=true')
// let p=data.json();
console.log(data)
return data;
}

fetchData();