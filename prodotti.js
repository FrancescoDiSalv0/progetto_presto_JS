// NAVBAR EVENTO SCROLL
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add("nav-custom")
    } else {
        navbar.classList.remove("nav-custom")
    }
})


// CHIAMATE API (Application Programming Interface)
// JSON (JavaScript Object Notation)

//La risposta di una fetch avviene mediante un oggetto chiamato PROMISE

fetch("./prodotti.json").then((response) => response.json()).then((data) => {

    let annunciWrapper = document.querySelector("#annunciWrapper");

    // CREAZIONE DELLE CARD
    function creazioneCard(array) {
        annunciWrapper.innerHTML = "";
        array.forEach((annuncio) => {

            let div = document.createElement("div");
            div.classList.add("col-12", "col-md-6", "col-lg-3", "justify-content-around")

            div.innerHTML = `
                <div class="card bg-P my-3">
                <div class="overflow-hidden">
                <img class="card-img-top card-image" src="${annuncio.img}"  style="width: 15rem; alt="Card image cap">
                </div>
                <div class="card-body colorA">
                    <h4 class="card-title d-flex justify-content-center mb-3">${annuncio.nome}</h4>
                    <h5 class="card-text">${annuncio.categoria}</h5>
                    <p class="card-text">Prezzo: ${annuncio.prezzo} € </p>
                    <a href="#" class="btn btn-warning d-flex justify-content-center">Aggiungi al carrello</a>
                </div>
                </div>
            `

            annunciWrapper.appendChild(div);

        })

    }
    
    creazioneCard(data);

     // SETTING DELLE CATEGORIE
     let radioWrapper = document.querySelector("#radioWrapper");

     function setCategorie() {
        let categorie = data.map( (el) => el.categoria);
        let categorieUniche = [];

        categorie.forEach( (categoria) => {
            if(!categorieUniche.includes(categoria)){
                categorieUniche.push(categoria);
            }
        })

        categorieUniche.forEach( (categoriaUnica) => {
            let div = document.createElement("div");
            div.classList.add("form-check", "form-check-inline");
            div.innerHTML = `
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id=${categoriaUnica}>
                            <label class="form-check-label" for=${categoriaUnica}>
                            ${categoriaUnica}
                            </label> 
            `
            radioWrapper.appendChild(div);
        })

     }

     setCategorie();

     let radioButtons = document.querySelectorAll(".form-check-input");

     function filterByCategory() {
        let radioBtnArray = Array.from(radioButtons)
        let checked = radioBtnArray.find( (el)=> el.checked == true )

        if(checked.id == "All"){
            creazioneCard(data);
            // return data
        } else {
            let filtered = data.filter( (el)=> el.categoria == checked.id)
            creazioneCard(filtered);
            // return filtered
        }
     }

     radioButtons.forEach( (radio) => {
        radio.addEventListener("input", () => {
             filterByCategory();
         })
     })


     let inputPrice = document.querySelector("#inputPrice");
     let priceLabel = document.querySelector("#priceLabel");

    //  FUNZIONE PREZZO MAGGIORE E MINORE
     function FindMinMaxPrice() {
        let prices = data.map( (el) => el.prezzo);
        let max = Math.max(...prices);
        let min = Math.min(...prices);
        inputPrice.min = min;
        inputPrice.max = max;
        inputPrice.value = max;
        priceLabel.innerHTML = `Prezzo: ${max} €`;
     }

     FindMinMaxPrice();

     function filterByPrice() {
        let filtered = data.filter( (el) => el.prezzo <= inputPrice.value)
         creazioneCard(filtered);
     }

     inputPrice.addEventListener("input", () => {
        priceLabel.innerHTML = `Prezzo: ${inputPrice.value} €`;
        filterByPrice();
     })


    //  FILTRO PER PAROLA

    let inputWord = document.querySelector("#inputWord");

    function filterByWord() {
        let filtered = data.filter( (el) => el.nome.toLowerCase().includes(inputWord.value.toLowerCase()))
        creazioneCard(filtered);
    }

    inputWord.addEventListener("input", () => {
        filterByWord();
    })

})
