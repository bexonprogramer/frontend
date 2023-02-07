let times= new Date(2022,11,15,23,59,59);
let naw= new Date()
let difference= times-naw

let day = Math.floor(difference/1000/60/60/24)
let hour = Math.floor(difference/1000/60/60)




console.log(day)
console.log(hour)
    