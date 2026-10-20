let motoGP = [
    {
        circuit: "Losail",
        location: "Qatar",
        winner: {
            firstName: "Andrea",
            lastName: "Dovizioso",
            country: "Italy"
        }
    },

    {
        circuit: "Autodromo",
        location: "Argentine",
        winner: {
            firstName: "Cal",
            lastName: "Crutchlow",
            country: "UK"
        }
    },

    {
        circuit: "De Jerez",
        location: "Spain",
        winner: {
            firstName: "Valentino",
            lastName: "Rossi",
            country: "Italy"
        }
    },

    {
        circuit: "Mugello",
        location: "Italy",
        winner: {
            firstName: "Andrea",
            lastName: "Dovizioso",
            country: "Italy"
        }
    }
];
let hasil = {};

for (let i = 0; i < motoGP.length; i++) {
    let negara = motoGP[i].winner.country;
    if (!hasil[negara]) {
        hasil[negara] = {
            winningCircuits: [],
            totalWin: 0
        };
    }

    hasil[negara].winningCircuits.push({
        name: motoGP[i].winner.firstName + " " + motoGP[i].winner.lastName,

        winLocation: motoGP[i].circuit + ", " + motoGP[i].location
    });

    hasil[negara].totalWin++;
}

console.dir(hasil, { depth: null });