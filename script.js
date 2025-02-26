window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
   
});

function elemekElerese1() {
    const ELEM=document.querySelectorAll("section h2")[0]
    let tartalom = ELEM.innerHTML
    console.log(tartalom)
}

function elemekElerese2() {
    const ELEM = document.getElementById("ide");
    ELEM.innerHTML +=
            `
            <p>Jó reggelt!</p>
            `;
    console.log(ELEM);
}

function elemekElerese3() {
    const ELEM = document.querySelectorAll(".ide")[0];
    ELEM.innerHTML += `
        <p>Jó reggelt!</p>
    `;
    console.log(ELEM);
}

function elemekElerese4() {
    const ELEM = document.getElementById("lista");
    let txt = "<ul>";
    
    for (i = 0; i < 5; i++) {
        let randomSzam = Math.floor(Math.random()*21 + 10);
        txt += `<li>${randomSzam}</li>`;
    }
    
    txt += "</ul>";
    ELEM.innerHTML = txt;
    console.log(ELEM);
}

function elemekFormazasa() {
    const ELEM = document.getElementById("lista");
    ELEM.classList.add("formazott");
}

/* -------------------------------------------------- */

function esemenyKezelesPelda() {
    let elem4 = document.querySelectorAll(".lista")[0];
    elem4.addEventListener("click", fvenynev);
}

function fvenynev() {
    let elem4 = document.querySelectorAll(".lista")[0];
    const kattintasUtanElem1 = document.querySelectorAll(".kattintasutan1")[0];
    kattintasUtanElem1.appendChildÍ(elem4);
}

/* -------------------------------------------------- */

function esemenyKezeles1() {
    const listaElem = document.getElementById("lista");
    const kattintasUtanElem = document.getElementById("kattintasutan");
    
    listaElem.addEventListener("click", fveny);
    
        function fveny() {
        kattintasUtanElem.innerHTML = listaElem.innerHTML;
    };
}