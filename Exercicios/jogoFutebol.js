// Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.


//entrada de dados
// = informar os dois times de futebol
// = informar o placar do jogo
const time1= prompt("Digite o nome do time 1: ")
const time2= prompt("Digite o nome do time 2: ")

const placarTime1= parseInt(prompt("Digite o placar do 1° time: "))
const placarTime2= parseInt(prompt("Digite o placar do 2° time: "))

//processamento
// = realizar a validação através das estruturas condicionais
// = verificar se os times ganharam, perderam ou empataram
    if( placarTime1 >placarTime2){
    alert(`O ${time1} ganhou de ${placarTime1} x ${placarTime2}`)
    }else if(placarTime2 > placarTime1){
    alert(`O ${time2} ganhou de ${placarTime2} x ${placarTime1}`)
    }
    else{
    alert(`Os times empataram :  ${placarTime1}x${placarTime2}`)
}

//OUTRA FORMA DE FAZER O EXERCÍCIO//
// const placar= '3x2';
// const [golsTime1, golsTime2]= placar.split('x')
 
// console.log(`COR- ${golsTime1} x ${golsTime2}-PAL`)
