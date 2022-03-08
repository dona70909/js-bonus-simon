/**
* Function that creates N unique numbers from minimun(min) value to N(maximun)
* @param {*} N value of how many numbers you want 
* @param {*} max max value of each number 
* @param {*} min minimum value of each number
* @returns {*} return an array of random Unique numbers
*/
// # funzione che crea i numeri random
function uniqueRandomNumbers(N,min,max){
    const arrayNumbers = [];
    while(arrayNumbers.length < N){
        let number = Math.floor(Math.random() * max + min);
        while(!arrayNumbers.includes(number)){
            arrayNumbers.push(number);
        }
    }
    return arrayNumbers;
    
}
// # funzione che inserisce i numeri(nel mio caso i numeri random)
function insertNumber(array,element){
    for(let i = 0; i < array.length; i++){
        let child = document.createElement("p");
        child.classList.add("m-0","p-4");
        let parent = document.getElementById(element);
        parent.appendChild(child).innerHTML = array[i];
    }
} 

// & assegno ad una variabile l'array dei numeri random
const numbers = uniqueRandomNumbers(5,1,100);
// & tempo in cui sono visibili ancora i numeri randomici, trascorso questo tempo....
const time = 4000;
//& ***** inserisco i numeri *****
insertNumber(numbers,"container-numbers");

// # trascorso il tempo i numeri randomici scompaiono
const timeOut = setTimeout(cancelNumbers,time);
function cancelNumbers(){
    let parent = document.getElementById("container-numbers");
    parent.innerHTML = " ";
}

// ++++++

// ******************************************************
const timeOutInsert = setTimeout(userInsertNumber,time + 5);
// #  dopo 4005s posso inserire i numeri altrimenti posso inserirli subito e quindi il gioco non ha senso
/**
* % come inserisco i numeri 
*    a) prendo il valore dall'input
*    b) premo insert 
*         b-1) il valore viene inserito in un array
*         b-2) il valore viene azzerato
*    c) ripeto per 5 volte 
*/
function userInsertNumber(){
    //# visualizzo l'input
    const containerInsert = document.getElementById("my-insert-container");
    containerInsert.classList.remove("d-none");
    
    // # array dei numeri inseriti dall'utente
    const userNumbers = [];
    
    // # prendo il button
    const insertBtn = document.getElementById("insert-btn");
    
    let form = document.getElementById("form").reset();
    let check = false;

    //# aggiungo l'evento click al button
    insertBtn.addEventListener("click",function(){
        // # prendo il valore dell'input
        //# aggiungo il valore all'interno di un array
        if(!check){
            if((userNumbers.length >= 0) && (userNumbers.length  <= 4)){
                const inputUser = document.getElementById("my-input").value;
                userNumbers.push(inputUser);
                console.log(userNumbers);
                form = document.getElementById("form").reset();
            } else {
                check = true;
                checkNumbers(userNumbers);
            }
        }
    });
}

// ! ++++++++++++++++
function checkNumbers(userNumbers){
    const containerInsert = document.getElementById("my-insert-container");
    containerInsert.classList.add("d-none");
    let score = 0;
    console.log(userNumbers + " user numbers");
    console.log(numbers + " numeri");    
    for(let i = 0; i < userNumbers.length; i++){
        if (userNumbers.includes(numbers[i])){
            score++;
        }
    }
    
    console.log("Hai indovinato n." + score + " numeri");
    document.getElementById("output-score").classList.add("p-4");
    document.getElementById("output-score").innerHTML = ("Hai indovinato n." + score + " numeri");
}


/* const timeOutInsert = setTimeout(userInsertNumber,time + 5);
function userInsertNumber(){
    for(let i = 0; i < numbers.length; i++){
        let insertUserNumber = parseInt(prompt("Inserisci un numero"));
        userNumbers.push(insertUserNumber);
    }
    return userNumbers;
} */


/*
const timeOutCheck = setTimeout(checkNumbers,time + 6000)
function checkNumbers(){
    const containerInsert = document.getElementById("my-insert-container");
    containerInsert.classList.add("d-none");
    let score = 0;
    console.log(userNumbers + " user numbers");
    console.log(numbers + " numeri");    
    for(let i = 0; i < userNumbers.length; i++){
        if (userNumbers.includes(numbers[i])){
            score++;
        }
    }
    
    console.log("Hai indovinato n." + score + " numeri");
    document.getElementById("output-score").classList.add("p-4");
    document.getElementById("output-score").innerHTML = ("Hai indovinato n." + score + " numeri");
}


/* const timeOutCheck = setTimeout(checkNumbers,time + 6000);
function checkNumbers(){
    const containerInsert = document.querySelector(".my-insert-container");
    containerInsert.classList.add("d-none");
    
    let score = 0;
    console.log(userNumbers + " user numbers");
    console.log(numbers + " numeri");    
    for(let i = 0; i < userNumbers.length; i++){
        if (userNumbers.includes(numbers[i])){
            score++;
        }
    }
    
    console.log("Hai indovinato n." + score + " numeri");
    document.getElementById("output-score").classList.add("p-4");
    document.getElementById("output-score").innerHTML = ("Hai indovinato n." + score + " numeri");
}
*/

