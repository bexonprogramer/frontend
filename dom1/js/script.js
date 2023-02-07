document.body.style.cssText = `
margin:0;
height:100vh;
background:  #F2EAE2;;
display:flex;
justify-content: center;   
align-items: center;          
`
let div1 = document.createElement("div")
div1.className="Rectangle"
div1.style.cssText=`
display:flex;
background: #FFFFFF;
border-radius: 10px;
width: 600px;
height: 450px;
overflow: hidden;
`
document.body.prepend(div1)

let photoBlock = document.createElement("div")
photoBlock.className= "img"
photoBlock.style.cssText=`
width: 300px;
height: 450px;

`
div1.prepend(photoBlock)

let imgPng = document.createElement("img")
imgPng.src= "img/Bitmap (7).png"
photoBlock.prepend(imgPng)

let textBlock= document.createElement("div")
textBlock.className="text"
textBlock.style.cssText= `
width:300px;
height:450px;
background: #FFFFFF;
padding: 32px;
`
div1.append(textBlock)

let perfume= document.createElement("p")
perfume.className= "p1"
perfume.innerText= "PERFUME"
perfume.style.cssText=`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
letter-spacing: 5px;
color: #6C7289;
margin-bottom:  20px;
margin-top: 0;
`
textBlock.prepend(perfume)

let gebriella = document.createElement("h1")
gebriella.innerText="Gabrielle Essence Eau De Parfum"
gebriella.style.cssText=`
font-family: 'Fraunces';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 32px;
color: #1C232B;
width:210px ;
margin-top: 0;
margin-bottom:  24px;

`
textBlock.append(gebriella)

let lorem= document.createElement("p")
lorem.className= "p2"
lorem.innerText= "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
lorem.style.cssText= `
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 23px;
color: #6C7289;
width: 237px;
margin-bottom: 29px; 
`
textBlock.append(lorem)

let prices= document.createElement("div")
prices.className= "prices"
prices.style.cssText= `
display: flex;
align-items: center;
margin-bottom: 30px;
`
textBlock.append(prices)

let price1= document.createElement("div")
price1.className= "price1"
price1.innerText= "$149.99"
price1.style.cssText= `
font-family: 'Fraunces';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 32px;
color: #3D8168;
margin-right: 19px;
`
prices.prepend(price1)

let price2= document.createElement("div")
price2.className= "price2"
price2.innerText= "$169.99"
price2.style.cssText=`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 23px;
text-decoration-line: line-through;
color: #6C7289;
`
prices.append(price2)

let btn = document.createElement("div")
btn.className= "btn"
btn.innerText= "Add to Cart"
btn.style.cssText= `
background: #3D8168;
border-radius: 8px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #FFFFFF;
width: 236px;
height: 48px;
display:flex;
justify-content: center;
align-items: center;

`
textBlock.append(btn)

let svg = document.createElement("img")
svg.className= "shape"
svg.src= "img/Shape.png"
svg.style.cssText= `
margin-right:12px;
width:14.39px;
height:15px;
`
btn.prepend(svg)

