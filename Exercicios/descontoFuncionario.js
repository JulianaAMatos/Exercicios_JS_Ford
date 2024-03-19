// Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
// Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o
// valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).

//entrada de dados
// = determinar se o cliente é 1- cliente, 2- funcionário e 3-vip
// = informar o total da compra 

const cliente= (prompt("Determine o nível"))
const funcionario = 2
const clienteComum = 1
const clienteVip= 3

const valorTotal= 150

//processamento de dados
// = usar a estrutura switch case para determinar se é cliente, funcionário ou vip


    if (funcionario){
      alert(`É funcionário da nossa loja e possuí 10% de desconto `)
    }else if (clienteVip){
      alert(`O cliente possuí 5% de desconto`)
    }else{
     alert(`Não possui cadastro na loja, o valor da compra é ${valorTotal}`)
    }
    

//saída de dados
// = se for cliente não haverá desconto
// = se for funcionário terá 10% de desconto
// = se for vip terá 5% de desconto