    let url = fetch('data.json');
    let ham = document.querySelector('.ham')
    let ulHeader = document.querySelector('ul')
    ham.addEventListener('click', () => {
        ulHeader.classList.toggle('click')
    })
    newData = []
    
    url.then(a => a.json()).then(a => {
        newData = a; 
        show(a[0])
    })

    let tabs = document.querySelectorAll("li")

    tabs.forEach((e,i) => {
        e.addEventListener('click', () => {
            show(newData[i])
            ulHeader.classList.remove("click")
        } )
    })

    function show(elem){
        let { name,images:{planet,internal,geology},rotation,revolution,radius,temperature } = elem;
    document.querySelector('.information').innerHTML=`
    <main>
    <div class="leftSide">
        <img src="${planet}" alt="#" >
    </div>
    <div class="rightSide">
        <div class="blok">
          <div class="nn">
          <h2>${name}</h2>
          <p>${elem.structure.content}</p>
          <div class="shape"><span>Source :</span>  Wikipedia  <img src="assets/icon-source.svg" alt="#"></div>
          </div>
        <div class="mmm">
        <div class="structure"><span class="num">01</span>OVERVIEW</div>
        <div class="structure"><span class="num">02</span> <span class="ss">Internal</span> Structure</div>
        <div class="structure"><span class="num">03</span><span class="ss">Surface</span> Geology</div>
        </div>
        </div>
    </div>
   </main>
   <footer>
    <div class="spaceInform">
        <div class="time">ROTATION TIME</div>
        <div class="days">${rotation}</div>
    </div>
    <div class="spaceInform">
        <div class="time">REVOLUTION TIME</div>
        <div class="days">${revolution}</div>
    </div>
    <div class="spaceInform">
        <div class="time">radius</div>
        <div class="days">${radius}</div>
    </div>
    <div class="spaceInform">
        <div class="time">AVERAGE TEMP.</div>
        <div class="days">${temperature}</div>
    </div>
   </footer>
    `
    }

   