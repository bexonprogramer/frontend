let seconds= new Date().getTime()
let input= document.querySelector(".inp1")
input.placeholder=Math.trunc(seconds/1000);
/////////

let times=document.querySelector(".seconds")
setInterval(() => {
let seconds= new Date().getTime()
    times.innerHTML=`${Math.trunc(seconds/1000)}`
    
}, 1000);
////////

let clok= document.querySelector(".clok")
let hours= new Date().getHours();
let minut= new Date().getMinutes()
let sec= new Date().getSeconds()
let pm="PM"
let round= setInterval(() => {
    clok.innerHTML=`${hours}:${minut}:${sec++} ${pm}`
    if(sec===59){
        sec=0
        minut++
    }
    if(minut===59){
        minut=0
        hours++
    }
    if(hours===23){
        hours=00
        pm="AM"
    }
}, 1000);
/////

let list=document.querySelector(".format")
let btn = document.querySelector("button")

    btn.addEventListener('click', ()=>{
        list.classList.add('active')
    })
////



let list2=document.querySelector(".unix")
let btn2=document.querySelector(".but2")

btn2.addEventListener('click', ()=>{
    list2.classList.add("active2")

})

////

let year= new Date().getFullYear()
let month= new Date().getMonth()
let day= new Date().getDate()
let inyear= document.querySelectorAll("input")
inyear[1].value=year
inyear[2].value=month+1
inyear[3].value=day
inyear[4].value=hours
inyear[5].value=minut
inyear[6].value=sec
/////

let thing=document.querySelectorAll(".sec")
let news = new Date().getTime()


let numbers=""
input.value=numbers
let abs=new Date(+numbers)
thing[2].innerHTML=abs
thing[4].innerHTML=news
thing[6].innerHTML=abs
thing[5].innerHTML=abs
thing[7].innerHTML="5 hours ago"




////





//   let seconds = new Date().getTime()
//   let times= setInterval(() => {
//   document.querySelector("h1").innerHTML = `${seconds++}`
    
//   }, 1000);




// // clock
//   let hours= new Date().getHours();
//   let minuts= new Date().getMinutes();
//   let second= new Date().getSeconds()
//   let clock= setInterval(() => {
//   document.querySelector("h2").innerHTML=`${hours}:${minuts}:${second++}`
//     if(second === 59){
//     second=00
//     minuts++
//     }
//     if(minuts === 59){
//     minuts=00
//     hours++
//     }
    
//   }, 1000);
   








































// let a= new Date();
// let b= new Date();

// console.log()

// for (let i = 0; i < 100000; i++) {
//     let doSomething = i * i * i;
//   }

// console.log(b-a)

// // console.log(a.getFullYear())
// // console.log(a.getDate())
// // console.log(a.getHours())
// // console.log(a.getMinutes())
// // console.log(a.getUTCFullYear())
// // console.log(a.getTimezoneOffset())
// // console.log(a.setFullYear(2000))
// // console.log(a.setHours(10))




















// function vowelOne(s){
//     let a="";
//     for(let i=0; i<s.length; i++){
//         if(s[i]=="a" || s[i]=="e" || s[i]=="i" || s[i]=="o" || s[i]=="u"){
//             console.log(i)
//             s[i]=   "1"
//         }
//         a+="0"
//     }
//     console.log(s)
//   }

//   vowelOne("a23sui")


























// function getCount(str) {
//     let a='';
//     for(let i=0; i<str.length ;i++){
//         if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//             a+=str[i]
//         }                   
        
//     }
//     console.log(a.length)  
    
// }


// getCount("usertyuiokj")
















// function spoonerize(words) {
//  let a= words.split('') 
//  let b=words[words.indexOf(" ")+1]
//  a.splice(0,1,b)
//  a.splice(a.indexOf(" ")+1,1,words[0])
//  console.log(a.join(''))
// }


// spoonerize("sdfg bnmc")