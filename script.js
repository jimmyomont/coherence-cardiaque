console.log('test');

//cibler bouton commencer 
const start = document.getElementById('start');
//ecouter l element bouton start
start.addEventListener('click', ()=>{
    console.log('clic clic bang-bang');

})

//cibler input select 
const select = document.getElementById('compteur'); 
const compteur = select.value; 
console.log(select);


// "soritr toute les valeurs de select"
for (const minuteur of select) {
    console.log(minuteur);
}
//test du selector 
select.addEventListener('selector', ()=>{

if (compteur === 1){
    console.log('test 1 ok');
}
})



// timer
const but = document.querySelector('button');

let cps = 1;


but.addEventListener('click', () => {
    if (cps == 1) {
        setInterval(timing, 1000);
    }

    viewFinder.classList.toggle('active');
    counter.textContent = cps++;
    showTime()
})

// Relancer le script

// Boîte du timer
const timerCadre = document.querySelector('.timer');
// Titre qui affiche le nombre de secondes qu'il reste
let timerTitle = document.createElement('h1');
// Minuteur de 10 secondes
let i = 50;
timerTitle.textContent = i-- + ' sec';
// Afficher le titre dans la boîte du timer
timerCadre.appendChild(timerTitle);


const timing = () => {
    if (i > 0) {
        timerTitle.textContent = i-- + ' sec';
    } else {
        timerTitle.textContent = 'END'
    }
}