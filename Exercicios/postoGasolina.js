// Um posto está vendendo combustíveis com a seguinte tabela de descontos:




// Dica: utilize switch case, operadores lógicos e relacionais e estrutura de condição para otimizar o algorítimo.
//switch ( litros <= 20 && litros == 'Álcool') {
   
        
        //alert(`Possuí desconto de 5% por litro. Total de desconto: ${litros * 0.05}. O valor a ser pago é ${precoAlcool - (litros * 0.05)}`)//
        
        //|| (litros >=20 && litros == 'Gasolina')
        //alert(`Possuí um desconto de 6% por litro. Total de desconto: ${litros * 0.06}. O valor a
        //entrada de dados
        // = selecionar se deseja abastecer com alcool ou com gasolina;
        // = selecionar a quantidade de litros que o usuário deseja;

        const tipoCombustivel=(prompt(`
        Qual o tipo de combustível você deseja:
        [A]Álcool [G]-Gasolina `))
        const litros= (prompt('Quantos litros?'))
        const precoAlcool= 4.90 * litros
        const precoGasolina= 5.30 * litros
        const descontoAlcool = (precoAlcool * 3)/ 100
        
        //processamento de dados
        // = switch case para gasolina ou alcool
        // Álcool:
        // . até 20 litros, desconto de 3% por litro Álcool
        // . acima de 20 litros, desconto de 5% por litro
        
        // Gasolina:
        // . até 20 litros, desconto de 4% por litro Gasolina
        // . acima de 20 litros, desconto de 6% por litro
        
        // Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado
        // da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente
        // sabendo-se que o preço do litro da gasolina é R$ 5,30 e o preço do litro do álcool é R$ 4,90.
        switch ( litros <=20 && tipoCombustivel == "A" || tipoCombustivel == "a") {
            case A:
            alert(`Possuí 3% de desconto. Valor sem desconto:  ${precoAlcool} reais. Total a ser pago com o desconto: ${precoAlcool * 0.3}`) 
            
            case B:
                litros <=20 && 'G'
                
                alert(`Posssuí 5% de desconto. Valor do desconto: ${litros * 0.05}.Total a ser pago: ${precoAlcool - (litros * 0.05)}`)
                break;
        

            default:
            alert(` Possuí 4% de desconto. Valor sem desconto: ${precoGasolina} reais. Total a ser pago com desconto: ${precoGasolina * 0.06} `)
        }