// Fiz uma alteração no cálculo das partidas, pois assim achei que ficou melhor.

// Start of the code 

let HerosName = "Killy"

    //If victories are less than 10 =  Iron
    //If victories are between 11 and 20 = Bronze
    //If victories are between 21 and 50 = Silver
    //If victories are between 51 and 80 = Gold
    //If victories are between 81 and 90 = Diamond
    //If victories are between 91 and 100 = Legendary
    //If victories are greater than or equal to 101 = Immortal

function calcularRank (totalMatch, lostMatch){
    return totalMatch - lostMatch
}

//Type in the first position the number of matches played and then the number of matches lost.

let winMatch = calcularRank (100, 1)

let rank = " "

if (winMatch <= 10)
    rank = "Iron" 

else if ((winMatch > 10) && (winMatch <=20))
    rank = "Bronze"

else if ((winMatch > 21) && (winMatch <=50))
    rank = "Silver"

else if ((winMatch > 51) && (winMatch <=80))
    rank = "Gold"

else if ((winMatch > 81) && (winMatch <=90))
    rank = "Diamond"

else if ((winMatch > 91) && (winMatch <=100))
    rank = "Legendary"

else if (winMatch >= 101)
    rank = "Immortal"

console.log("O Herói " + HerosName + " tem saldo de " + winMatch + " vitórias e está no Ranking " + rank);