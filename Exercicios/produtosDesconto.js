// Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o
// preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o
// desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:


// - Se quantidade <= 5 o desconto será de 2%
// - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
// - Se quantidade > 10 o desconto será de 5%

// Dica: utilize if / else if / else


//entrada de dados
// = criar variável para receber o nome do produto 
// = perguntar ao usuário qual vai ser a quantidade de produtos
// = perguntar o preço unitário do produto

//processamento de dados
// = realizar o calculo do total da quantidade do produto * valor unitário do produto 
// = realidar o calculo do desconto com base na quantidade de produtos que o usuário vai comprar

//saída de dados
// - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
// - Se quantidade > 10 o desconto será de 5%

// = mostrar a saída dos produtos que ela escolher e a quantidade e o preço de cada produto
// = mostrar também o desconto de cada produto

const nomeProduto= (prompt("Digite seu produto: "))
const quantidade= parseInt(prompt("Qual é a quantidade: "))
const precoUnitario = parseInt(prompt("Digite o valor unitário: "))

const total= quantidade * precoUnitario
const totalDesconto1= total -(total * 2 /100)
const totalDesconto2= total - (total * 3 / 100)
const totalDesconto3= total - (total * 5 / 100)


    if (quantidade <= 5 ){
    alert(` Nome= ${nomeProduto}, quantidade= ${quantidade}, valor= ${precoUnitario} e obteve de desconto ${totalDesconto1.toFixed(2)}`)
    }else if( quantidade <= 10){
    alert(`Nome ${nomeProduto}, quantidade= ${quantidade}, valor= ${precoUnitario} e obteve de desconto ${totalDesconto2.toFixed(2)}`)
    }else{
    alert(` Nome=${nomeProduto}, quantidade= ${quantidade} , valor= ${precoUnitario} e obteve de desconto ${totalDesconto3.toFixed}`)
    }