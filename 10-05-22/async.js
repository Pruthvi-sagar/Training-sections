// setTimeout(()=>{
//     document.body.style.backgroundColor="voilet"
//     setTimeout(() => {
//         document.body.style.backgroundColor="indigo"
//         setTimeout(() => {
//             document.body.style.backgroundColor="blue"
//             setTimeout(() => {
//                 document.body.style.backgroundColor="green"
//                 setTimeout(() => {
//                     document.body.style.backgroundColor="yellow"
//                     setTimeout(() => {
//                         document.body.style.backgroundColor="red"


                
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// },1000)

let changeColor=(color,delay,funct)=>{
    setTimeout(() => {
        document.body.style.backgroundColor=color
    }, delay);
    funct();
}
changeColor('green',1000,()=>{
    document.body.style.backgroundColor='red'

})

// function fakeCallBacks(url,promise1,promise2){
//     let num=Math.floor(Math.random()*10);
//     if(num<5){
//         promise1('working')
//     }
//     else{
//         promise2('error')
//     }
// }
// fakeCallBacks(".com",(res)=>{
//     console.log(res)
//     fakeCallBacks('.cc',()=>{
//         console.log('1error')
//     },(r)=>{
//         console.log('jelj')
//     })
// },(res)=>{
//     console.log(res)
// })
function fakePromises(url){
    return new Promise((resolve,reject)=>{
        let num=Math.floor(Math.random()*10);
        if(num>5){
            reject('working')
        }
        else{
            resolve('not working')
        }
    })
}
// fakePromises('kjldjj.com')
// .then((result) => {
//     console.log('promise accepted')
//     fakePromises('ksk')
//     .then((err)=>{
//         console.log('promise 1')
//     }).catch((err)=>{
//         console.log('rejected 1')
//     })
// }).catch((err) => {
//     console.log('promise rejected')
// });

fakePromises('url')
.then((er)=>{
    console.log('first page')
    return fakePromises('urlmsj')
}).then((e)=>{
    console.log('second page')
    return fakePromises('hsjdk')
}).then((e)=>{
    console.log('third page')
}).catch(()=>{
    console.log('failed')
})
