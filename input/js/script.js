let in1=document.querySelector(".wid");


let in2=document.querySelector(".heig");


let in3=document.querySelector(".rad");


let in4=document.querySelector(".col");


let btn=document.querySelector("button");
btn.addEventListener('click', ()=>{
  if(in1.value.includes("px") && in2.value.includes("px") && in3.value.includes("px")){ 
    let block=document.createElement("div")
    block.style.width=in1.value
    block.style.height=in2.value
    block.style.borderRadius=in3.value
    block.style.backgroundColor=in4.value
    document.body.append(block)
    
}else alert ("false")
   
})

