// NAVBAR EVENTO SCROLL
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if(window.scrollY > 0 ){
        navbar.classList.add("nav-custom")
    }else{
        navbar.classList.remove("nav-custom")
    }
})


// ANIMAZIONI IMMAGINI







// NUMERI IN AUMENTO

let numUtenti = document.querySelector("#numUtenti")
let numProdotti = document.querySelector("#numProdotti")
let numMessaggi = document.querySelector("#numMessaggi")

function creazioneNumeri(counter, idbox, frequenza) {
    
    let i = 0;

    let intervalloNumeri = setInterval(() => {
        
    if(i <= counter){
        idbox.innerHTML = i;
        i++;
    }else{
        clearInterval(intervalloNumeri)
    }

    }, frequenza);


}

creazioneNumeri(500, numUtenti, 20);
creazioneNumeri(1500, numProdotti, 15);
creazioneNumeri(5000, numMessaggi, 5);



// CARD DINAMICHE

let annunci = [

    {title: "Katana d'oro", categoria: "collezione", prezzo: "500$", disponibilità: 3 , img: "https://i.ytimg.com/vi/O_X1pFcP1ic/maxresdefault.jpg"},
    {title: "Katana nera", categoria: "collezione", prezzo: "350$", disponibilità: 7 , img: "https://d3524jlyu2md0e.cloudfront.net/5d/16394157486489.webp?2000x3007"},
    {title: "Katana legno #1", categoria: "accessori", prezzo: "125$", disponibilità: 35 , img: "https://m.media-amazon.com/images/I/71ZwJNnB-XS._AC_SL1500_.jpg"},
    {title: "Katana d'oro #2", categoria: "arredamento", prezzo: "75$", disponibilità: 55 , img: "https://m.media-amazon.com/images/I/71H1304rigS._AC_SL1500_.jpg"},

]


let cardWrapper = document.querySelector("#cardWrapper");

annunci.forEach( (annuncio, i)=> {

    if(i >= annunci.length - 4 ){
    let div = document.createElement("div");
    div.classList.add("col-12", "col-md-6", "col-lg-3", "justify-content-between")

    div.innerHTML = `
        <div class="card bg-P position-relative">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-P z-3">NEW</span>
        <div class="overflow-hidden">
          <img class="card-img-top card-image" src="${annuncio.img}" alt="Card image cap">
        </div>
          <div class="card-body colorA">
            <h5 class="card-title d-flex justify-content-center">${annuncio.title}</h5>
            <p class="card-text">Categoria: ${annuncio.categoria}</p>
            <p class="card-text">Prezzo: ${annuncio.prezzo} € </p>
            <p class="card-text">Disponibilità: ${annuncio.disponibilità}</p>
            <a href="#" class="btn btn-warning d-flex justify-content-center">Dettagli</a>
          </div>
        </div>
    `

    cardWrapper.appendChild(div);
    }

})