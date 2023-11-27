let simbol = 'O'

const tds = document.getElementsByClassName('myTable td');


Array.from(tds).forEach(function (element) {
    element.addEventListener('click', function (e) {
        if (this.innerText == "") {
            if (simbol == 'O') { simbol = 'X' }
            else { simbol = 'O' }
            this.innerText = simbol
            winChecker();
        }

    });
});

function winChecker() {
    
    let table = document.querySelectorAll("tr")
    rolWinCheck(table);
    colWinCheck(table);
    verticalCheck(table);
    equalityCheck();
    
}

function equalityCheck(){
debugger;
let table = document.querySelector('table')
let tds = table.querySelectorAll('td');
let isequality = true;
tds.forEach(td => {
    if (td.innerText != 'X' && td.innerText != 'O') {
        isequality = false;
    }
});
if(isequality == true){
    clearFild()
}
}

function rolWinCheck(table) {
    for (let i = 0; i < 3; i++) {
        let tds = table[i].querySelectorAll('td');
        let haveWiner = true;
       

        let simbol = tds[0].innerText;

        for (let index = 0; index < 3; index++) {
            let td = tds[index];
            
            if (td.innerText != 'O' && td.innerText != 'X') {
                haveWiner = false;
                break;
            }
            if(index == 0){
                simbol = td.innerText;
            }
           else if(td.innerText != simbol){
                haveWiner = false;
                break;
            }
        }
        if (haveWiner == true) {
            scoreIncreaser(simbol);
        }
    }
}

function colWinCheck(table){
let col = 0;
for (let i = 0; i < 3; i++) {
    
    let win = true;
    let simbol = '';
    for (let j = 0; j < 3; j++) {
        let tr = document.querySelectorAll('tr')[j]
        let td = tr.querySelectorAll('td')[col]
        if(td.innerText != 'O' &&td.innerText != 'X')
        {
            win = false;
            break;
        }
        if(j == 0){
            simbol =td.innerText
        }
        else if (td.innerText != simbol){
            win = false;
            break;
        }
        
    }
    if(win == true) {
        scoreIncreaser(simbol);
    }
    col++;
}
}

function verticalCheck(table){
    
    let rol = 0 ;
    let simbol = '';
    let win = true;

    for (let col = 0; col < 3; col++ , rol++) {
        let tr = table[col];
        let td = tr.querySelectorAll('td')[rol];
        if(td.innerText != 'X' && td.innerText != 'O'){
            win = false;
            break;
        }
        if(col == 0){
            simbol = td.innerText;
        }
        else if(td.innerText != simbol){
         win = false;
        }
    }

    if(win == true){
        scoreIncreaser(simbol);
    }

    rol1 = 2 ;
    simbol1 = '';
    win1 = true;

    for (let col = 0; col < 3; col++ ,rol1--) {
        let tr = table[col];
        let td = tr.querySelectorAll('td')[rol1];
        if(td.innerText != 'X' && td.innerText != 'O'){
            win1 = false;
            break;
        }
        if(col == 0){
            simbol1 = td.innerText;
        }
        else if(td.innerText != simbol1){
         win1 = false;
        }
    }
    
    if(win1 == true){
        scoreIncreaser(simbol);
    }
}

function scoreIncreaser(simbol){
    debugger;
    clearFild();
    let soreBoard = document.querySelector("#ScorBord");
    let arrOfXandOScor = soreBoard.innerText.split("/");
    let xScore = arrOfXandOScor[0];
    let oScore = arrOfXandOScor[1];
    
    if(simbol == 'X'){
     let xToken =  xScore.split(':');
     let scoreForX = parseInt(xToken[1]);
     xScore = `X:${scoreForX + 1}`;
    }
    else{
        let OToken =  oScore.split(':');
        let scoreForO = parseInt(OToken[1]);
        oScore = `O:${scoreForO + 1}`;
        }
        let newScore = xScore + "/" +  oScore;
        soreBoard.innerText = newScore ;
    }


function clearFild(){
    let tds = document.querySelectorAll("td")
    tds.forEach(td => {
        td.innerText ="";
    });
}
 
document.querySelector("button").addEventListener("click" ,function(){window.location.reload()})




