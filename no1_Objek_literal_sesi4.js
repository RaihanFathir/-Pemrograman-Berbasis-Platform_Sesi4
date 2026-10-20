let studentscore = [
    {
        name : "andi",
        score : 90
    },
    {
        name : "rudi",
        score : 80
    },
    {
        name : "dira",
        score : 100
    }
]

let nilai_tertinggi = studentscore[0];
for (i=1;i<studentscore.length;i++){
    if (studentscore[i].score > nilai_tertinggi.score){
        nilai_tertinggi = studentscore[i];
    }
}

console.log("Nama: ", nilai_tertinggi.name);
console.log("Score: ", nilai_tertinggi.score);