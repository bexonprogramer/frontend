let btn=document.querySelector(".btn"),
    input=document.querySelector(".num"),
    prc1=document.querySelector(".usd"),
    prc2=document.querySelector(".rub"),    
    prc3=document.querySelector(".jpy");
    prc4=document.querySelector(".gbp");



let req= new XMLHttpRequest();
req.open("GET", "js/current.json")

req.setRequestHeader("Content-type","application/json;charset=UTF-8")

req.send();


req.addEventListener("readystatechange", ()=>{
    if(req.readyState===4){
      let price= JSON.parse(req.response)
     btn.addEventListener('click', ()=>{
        prc1.innerHTML= "USD: " +  (input.value * price[1].USD);
        prc2.innerHTML= "RUB: " + (input.value * price[0].RUB) ;
        prc3.innerHTML= "JPY: " + (input.value * price[2].JPY) ;
        prc4.innerHTML= "GBP: " + (input.value * price[3].GBP) ;
        if(+input.value<0){
            prc1.innerHTML= "NaN"
            prc2.innerHTML= "NaN"
            prc3.innerHTML= "NaN" 
            prc4.innerHTML= "NaN" 
        }
     })
      

    }
})



