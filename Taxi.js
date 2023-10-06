"use strict"
// -------------------------Fonction-------------------------
function nb_FeuRouge()
{
    return Route[0];
};

function sante_mental()
{
    return Personnage[1];
};

function musique()
{
    let musique_nb = Math.floor(Math.random() * 5);
    return Radio[musique_nb];
};

// -------------------------Initialisation-------------------------
let Personnage = ["John",10];
let Radio = ["Anissa, Wejdene","Valhalla, Carbonne","La vibe, Kik","Resume, bbno$","Velours, VINK"];
let Route = [30,0];
let musique_jouer ;

// -------------------------Main Boucle-------------------------
while (nb_FeuRouge() >= 0 && sante_mental() >= 0)
{
    musique_jouer = musique();
    if (musique_jouer == "Anissa, Wejdene")
    {
        Personnage[1] -= 1;
        Route[1] += 1;
        if (sante_mental() <= 0)
        {
            console.log("Explosion");
            document.write(`Explosion`);
            break;
        };
    };

    Route[0] -= 1
    
    if (nb_FeuRouge() <= 0)
    {
        console.log(`${Personnage[0]} est arrivé chez lui en changeant ${Route[1]} fois de taxi`);
        document.write(`${Personnage[0]} est arrivé chez lui en changeant ${Route[1]} fois de taxi`);
        break;
    }
    else 
    {
        console.log(`La radio a joué ${musique_jouer} il reste encore ${nb_FeuRouge()} feu rouges`);
    };

};
