class Rectangle{
  constructor(width, height, background, radius){
    this.boxWidth= width
    this.boxHeight= height
    this.boxBackground= background
    this.boxRadius= radius
  }
   
  rander(){
    let box= document.querySelector(".box")
    box.style.width=this.boxWidth 
    box.style.height=this.boxHeight 
    box.style.background=this.boxBackground 
    box.style.borderRadius=this.boxRadius
  }
}

let rec = new Rectangle("300px", "300px", "pink", "100%")
let rec1 = new Rectangle("300px", "100px", "red", "100px")

rec.rander()
rec1.rander()


















  // class Phones{

//     constructor(marks, year, color){
//         this.mobile = marks
//         this.isMade= year
//         this.rang= color
//     }
// }

// let redmi= new Phones("redmi", 10 , "green")

// console.log(redmi)





//  let obj = {
//     name: "John",
//     surname: "Smith",
//     setName: function (name) {
//       this.name = name
  
//       function sayHi() {
//         console.log(this.name+ " hello")
//       }
  
//       sayHi.call(this)
//     }
//   }

//   obj.setName("Alex")

