const affichage = document.getElementById('affichage');

const boutonAjouter = document.getElementById('solde'); 

const boutonsAchat = document.querySelectorAll('.bouton-achat'); 

let score = Number(sessionStorage.getItem('monnaie')) || 0;

if (affichage) affichage.innerText = score;

function sauvegarder() {
    if (affichage) affichage.innerText = score;
    sessionStorage.setItem('monnaie', score);
}

if (boutonAjouter) {
    const sonMoney = document.getElementById('money');

    boutonAjouter.addEventListener('click', () => {
        let gain = 1;

        if (score >= 1000) {
            gain = 100;  
        } else if (score >= 500) {
            gain = 10;   
        } else if (score >= 100) {
            gain = 5;  
        } else if (score >= 50) { 
            gain = 2;
        }
        
        score += gain;
        sauvegarder();

        if (sonMoney) {
            sonMoney.currentTime = 0;
            sonMoney.play();
        }
    }
);
}

boutonsAchat.forEach(bouton => {
    bouton.addEventListener('click', () => {
        const prix = Number(bouton.getAttribute('data-prix'));
        const sonPay = bouton.querySelector('#applepay');

        if (score >= prix) {
            score -= prix;
            sauvegarder();

            if (sonPay) {
                sonPay.currentTime = 0;
                sonPay.play();
                 alert("Merci pour ton achat de " + (prix) + " €.");
            }

            bouton.classList.add('clicked'); 
        } else {
            alert("Solde insuffisant ! Il te manque " + (prix - score) + " €. Va gagnez plus de monnaie sur ton porte feuille");
        }
    }
);
}
);