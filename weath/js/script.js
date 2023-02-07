let button = document.querySelector(".button"),
    inputValue = document.querySelector(".inputValue"),
    name = document.querySelector(".name"),
    desc = document.querySelector(".desc"),
    temp = document.querySelector(".temp");


button.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
        .then(response => response.json())
        .then(data =>
                {
                let nameValue = data["name"];
                let tempValue = data["main"]["temp"];
                let descValue = data["weather"][0]["description"];
    
                name.innerHTML="Country: "+ nameValue;
                temp.innerHTML="Temp: "+ tempValue;
                desc.innerHTML="Weather information: " +descValue;
            })

        .catch(err => alert("Wrong city name!"))
})





