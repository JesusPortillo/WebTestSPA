const bt = document.getElementById('ocultar')
const lista = document.getElementById('nombres')
const prev = document.getElementById('prev')
const skip = document.getElementById('skip')
const score = document.getElementById('score')
const totalScore = document.getElementById('totalScore')
const countdown = document.getElementById('countdown')
const res = document.getElementById('res')
const aprob = document.getElementById('aprob')
const reprob = document.getElementById('reprob')
const cuadro = document.getElementById('cuadro')
const name1 = document.getElementsByClassName('a1')
const name2 = document.getElementsByClassName('a2')
const name3 = document.getElementsByClassName('a3')
const name4 = document.getElementsByClassName('a4')
const name5 = document.getElementsByClassName('a5')
const name6 = document.getElementsByClassName('a6')
const name7 = document.getElementsByClassName('a7')
const name8 = document.getElementsByClassName('a8')
const name9 = document.getElementsByClassName('a9')
const name10 = document.getElementsByClassName('a10')
var count = 0
var cont = 0
var scoreCount = 0
var buscando = 0
var qaHead = document.querySelector('qa_header')
var qaSet = document.querySelectorAll('.qa_set')
var qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input')
var resp1 = document.getElementById('resp1')
var resp2 = document.getElementById('resp2')
var resp3 = document.getElementById('resp3')
var resp4 = document.getElementById('resp4')
var resp5 = document.getElementById('resp5')
var resp6 = document.getElementById('resp6')
var resp7 = document.getElementById('resp7')
var resp8 = document.getElementById('resp8')
var resp9 = document.getElementById('resp9')
var resp10 = document.getElementById('resp10')
var as1 = document.getElementById('as1')
var as2 = document.getElementById('as2')
var as3 = document.getElementById('as3')
var as4 = document.getElementById('as4')
var as5 = document.getElementById('as5')
var as6 = document.getElementById('as6')
var as7 = document.getElementById('as7')
var as8 = document.getElementById('as8')
var as9 = document.getElementById('as9')
var as10 = document.getElementById('as10')
prev.style.display = 'none';
aprob.style.display = 'none'
reprob.style.display = 'none'
skip.addEventListener('click', function(){
    step()
})

prev.addEventListener('click', function(){
    stepless()
})

bt.addEventListener('click', function(){
   document.getElementById('login-page').style.display='none';
   getData()
   document.getElementById('nav-bar').style.display='block';
   cuadro.style.display = 'flex'
   document.getElementById('qa_box').style.display = 'block'
})

res.addEventListener('click', function(){
    for(var i = 0; i < qaSet.length; i++ ){
        qaSet[i].className = 'qa_set active'
    }
    res.style.display = 'none';
    cuadro.style.display = 'none'
    verificarNota()
    mostrarVerdaderas()
})
function verificarNota(){
    if(scoreCount >= 3.0){
        aprob.style.display = 'inline-block'
        reprob.style.display = 'none'
    }else{
        aprob.style.display = 'none'
        reprob.style.display = 'inline-block'
    }
}
function mostrarVerdaderas(){
    resp1.style.display = 'inline'
    resp2.style.display = 'inline'
    resp3.style.display = 'inline'
    resp4.style.display = 'inline'
    resp5.style.display = 'inline'
    resp6.style.display = 'inline'
    resp7.style.display = 'inline'
    resp8.style.display = 'inline'
    resp9.style.display = 'inline'
    resp10.style.display = 'inline'
}
qaAnsRow.forEach( function(qaAnsRowSingle){
    qaAnsRowSingle.addEventListener('click', function(){
        setTimeout(() => {
            cont+=1
            count = cont
            step1()
            dsb()

        }, 400);
        var valid = this.getAttribute('valid')
        if(valid == 'valid'){
            scoreCount +=0.5
            score.innerHTML = scoreCount
            totalScore.innerHTML = scoreCount
            if(qaSet[cont] == qaSet[0]){
                as1.style.backgroundColor = 'rgb(0, 128, 0)'
            }else if(qaSet[cont] == qaSet[1]){
                as2.style.backgroundColor = 'rgb(0, 128, 0)'
            }else if(qaSet[cont] == qaSet[2]){
                as3.style.backgroundColor = 'rgb(0, 128, 0)'
            }else if(qaSet[cont] == qaSet[3]){
                as4.style.backgroundColor = 'rgb(0, 128, 0)'
            }else if(qaSet[cont] == qaSet[4]){
                as5.style.backgroundColor = 'rgb(0, 128, 0)'
            }else if(qaSet[cont] == qaSet[5]){
                as6.style.backgroundColor = 'rgb(0, 128, 0)'
            }else if(qaSet[cont] == qaSet[6]){
                as7.style.backgroundColor = 'rgb(0, 128, 0)'
            }else if(qaSet[cont] == qaSet[7]){
                as8.style.backgroundColor = 'rgb(0, 128, 0)'
            }else if(qaSet[cont] == qaSet[8]){
                as9.style.backgroundColor = 'rgb(0, 128, 0)'
            }else if(qaSet[cont] == qaSet[9]){
                as10.style.backgroundColor = 'rgb(0, 128, 0)'
            }
        }else{
            scoreCount +=0
            score.innerHTML = scoreCount
            totalScore.innerHTML = scoreCount
            if(qaSet[cont] == qaSet[0]){
                as1.style.backgroundColor = 'red'
            }else if(qaSet[cont] == qaSet[1]){
                as2.style.backgroundColor = 'red'
            }else if(qaSet[cont] == qaSet[2]){
                as3.style.backgroundColor = 'red'
            }else if(qaSet[cont] == qaSet[3]){
                as4.style.backgroundColor = 'red'
            }else if(qaSet[cont] == qaSet[4]){
                as5.style.backgroundColor = 'red'
            }else if(qaSet[cont] == qaSet[5]){
                as6.style.backgroundColor = 'red'
            }else if(qaSet[cont] == qaSet[6]){
                as7.style.backgroundColor = 'red'
            }else if(qaSet[cont] == qaSet[7]){
                as8.style.backgroundColor = 'red'
            }else if(qaSet[cont] == qaSet[8]){
                as9.style.backgroundColor = 'red'
            }else if(qaSet[cont] == qaSet[9]){
                as10.style.backgroundColor = 'red'
            }
        }
    })
})
as1.addEventListener('click', function(){
    qaSet[0].className = 'qa_set active'
    for(var i = 1; i < qaSet.length; i++ ){
        qaSet[i].className = 'qa_set'
        prev.style.display = 'none';
        skip.style.display = 'inline-block'
    }
})
as2.addEventListener('click', function(){
    qaSet[1].className = 'qa_set active'
    for(var i = 0; i < qaSet.length; i++ ){
        if(i != 1){
            qaSet[i].className = 'qa_set'
            prev.style.display = 'inline-block'
            skip.style.display = 'inline-block'
        }
    }
})
as3.addEventListener('click', function(){
    qaSet[2].className = 'qa_set active'
    for(var i = 0; i < qaSet.length; i++ ){
        if(i != 2){
            qaSet[i].className = 'qa_set'
            prev.style.display = 'inline-block'
            skip.style.display = 'inline-block'
        }
    }
})
as4.addEventListener('click', function(){
    qaSet[3].className = 'qa_set active'
    for(var i = 0; i < qaSet.length; i++ ){
        if(i != 3){
            qaSet[i].className = 'qa_set'
            prev.style.display = 'inline-block'
            skip.style.display = 'inline-block'
        }
    }
})
as5.addEventListener('click', function(){
    qaSet[4].className = 'qa_set active'
    for(var i = 0; i < qaSet.length; i++ ){
        if(i != 4){
            qaSet[i].className = 'qa_set'
            prev.style.display = 'inline-block'
            skip.style.display = 'inline-block'
        }
    }
})
as6.addEventListener('click', function(){
    qaSet[5].className = 'qa_set active'
    for(var i = 0; i < qaSet.length; i++ ){
        if(i != 5){
            qaSet[i].className = 'qa_set'
            prev.style.display = 'inline-block'
            skip.style.display = 'inline-block'
        }
    }
})
as7.addEventListener('click', function(){
    qaSet[6].className = 'qa_set active'
    for(var i = 0; i < qaSet.length; i++ ){
        if(i != 6){
            qaSet[i].className = 'qa_set'
            prev.style.display = 'inline-block'
            skip.style.display = 'inline-block'
        }
    }
})
as8.addEventListener('click', function(){
    qaSet[7].className = 'qa_set active'
    for(var i = 0; i < qaSet.length; i++ ){
        if(i != 7){
            qaSet[i].className = 'qa_set'
            prev.style.display = 'inline-block'
            skip.style.display = 'inline-block'
        }
    }
})
as9.addEventListener('click', function(){
    qaSet[8].className = 'qa_set active'
    for(var i = 0; i < qaSet.length; i++ ){
        if(i != 8){
            qaSet[i].className = 'qa_set'
            prev.style.display = 'inline-block'
            skip.style.display = 'inline-block'
        }
    }
})
as10.addEventListener('click', function(){
    qaSet[9].className = 'qa_set active'
    for(var i = 0; i < qaSet.length; i++ ){
        if(i != 9){
            qaSet[i].className = 'qa_set'
        }
        skip.style.display = 'none';
        prev.style.display = 'inline-block'
    }
})

const getData = function(){
    const nom = document.getElementById('nombre').value
    const ape = document.getElementById('apellido').value
    const itemList = document.createElement('li')
    itemList.textContent = "Nombre completo: " + nom + " " + ape
    lista.appendChild(itemList)
}

function step(){
    count+=1
    for(var i = 0; i < qaSet.length; i++ ){
        qaSet[i].className = 'qa_set'
    }
    qaSet[count].className = 'qa_set active'
    if(count == 1){
        prev.style.display = 'inline-block';
    }
    if(count <= 9){
        skip.style.display = 'inline-block';
        prev.style.display = 'inline-block'
    }
    if(count == 9){
        skip.style.display = 'none';
    }
    if(count > 9){
        prev.style.display = 'none';
        skip.style.display = 'none';
    }
}
function dsb(){
    for(i = 0; i < qaSet.length; i++){
        if(cont == 1){
            name1[i].disabled = 'true'
        }
        if(cont == 2){
            name2[i].disabled = 'true'
        }
        if(cont == 3){  
            name3[i].disabled = 'true'
        }
        if(cont == 4){
            name4[i].disabled = 'true'
        }
        if(cont == 5){
            name5[i].disabled = 'true'
        }
        if(cont == 6){
            name6[i].disabled = 'true'
        }
        if(cont == 7){
            name7[i].disabled = 'true'
        }
        if(cont == 8){
            name8[i].disabled = 'true'
        }
        if(cont == 9){
            name9[i].disabled = 'true'
        }
        if(cont == 10){
            name10[i].disabled = 'true'
        }
    }
}
function stepless(){
    count -= 1
    qaSet[count].className = 'qa_set active'
    for(var i = count+1; i < qaSet.length; i++){
        qaSet[i].className = 'qa_set'
    }
    if(count == 0){
        prev.style.display = 'none';
    }
    if(count < 9){
        skip.style.display = 'inline-block';
    }
}

function step1(){
    for(var i = 0; i < qaSet.length; i++ ){
        qaSet[i].className = 'qa_set'
    }
    qaSet[cont].className = 'qa_set active'
    if(cont == 1){
        prev.style.display = 'inline-block';
    }
    if(cont <= 9){
        skip.style.display = 'inline-block';
        prev.style.display = 'inline-block'
    }
    if(cont == 9){
        skip.style.display = 'none';
    }
    if(cont > 9){
        prev.style.display = 'none';
        skip.style.display = 'none';
    }
}