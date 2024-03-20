// Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
// Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o
// valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).

//entrada de dados
// = determinar se o cliente é 1- cliente, 2- funcionário e 3-vip
// = informar o total da compra 

const valorTotal= parseFloat(prompt("Digite o valor da compra: "))
const Tipocliente= Number(
prompt(`
Determine o nível:
[1]- Funcionário
[2]- Cliente Vip 
[3]- Cliente Comum
`) 
);
let totalDesconto

//processamento de dados
// = usar a estrutura switch case para determinar se é cliente, funcionário ou vip
    switch (Tipocliente){
      case 1:
         totalDesconto= valorTotal * 0.1

         alert(`É funcionário da nossa loja e possuí 10% de desconto na compra. Tendo um total de desconto de: ${totalDesconto} reais. O
         total da compra é de: $ ${valorTotal - totalDesconto} reais`)
        break;

      case 2:

        totalDesconto= valorTotal * 0.05

        alert(`O cliente possuí 5% de desconto. Tendo um total de desconto de $ ${totalDesconto} reais. 
        O total da sua compra com desconto é de $ ${valorTotal} reais.`)
      case 3 :
        alert(`Não possui cadastro na loja, o valor da compra é ${valorTotal}`)
        break;

      default:
        alert(`Opção Inválida`)
    }


//saída de dados
// = se for cliente não haverá desconto
// = se for funcionário terá 10% de desconto
// = se for vip terá 5% de desconto